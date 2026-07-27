import { ChangeDetectionStrategy, Component, computed, inject, signal, Signal,
} from '@angular/core';
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatToolbar} from '@angular/material/toolbar';
import {MatButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {Search} from '../search/search';
import {takeUntilDestroyed, toObservable, toSignal} from '@angular/core/rxjs-interop';
import {debounceTime, distinctUntilChanged} from 'rxjs';
import {BooksApiService} from '../../api/books-api.service';
import {Book} from '../../models/book';
import {AuthService} from '../../../../core/auth/auth.service';
import {AppStore} from '../../../../core/auth/app.store';

@Component({
  selector: 'app-books',
  imports: [MatToolbar, MatButton, MatIcon, CdkDropList, CdkDrag, Search],
  templateUrl: './books.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './books.scss',
})
export class Books {
  private booksService = inject(BooksApiService);
  private auth = inject(AuthService);
  private bookItemHeight = 206;
  private overscan = 5;

  readonly searchTerm = signal<string>('');
  readonly filtersOpen = signal(false);
  readonly selectedAuthor = signal('');
  readonly selectedCountry = signal('');
  readonly selectedPublisher = signal('');

  private bookOrder = signal<number[]>([]);
  private booksScrollTop = signal(0);
  private booksViewportHeight = signal(620);
  readonly booksTotal: Signal<number> = computed(() => this.filteredBooks().length);
  protected readonly store = inject(AppStore);

  readonly allBooks: Signal<Book[]> = toSignal(
    this.booksService.getBooks(),
    { initialValue: [] }
  );

  private readonly debouncedTerm = toSignal(
    toObservable(this.searchTerm).pipe(
      debounceTime(300),
      distinctUntilChanged(),
      takeUntilDestroyed()
    ),
    { initialValue: '' }
  );

  readonly authors = computed(() => this.getFilterOptions('author'));
  readonly countries = computed(() => this.getFilterOptions('country'));
  readonly publishers = computed(() => this.getFilterOptions('publisher'));
  readonly activeFiltersCount = computed(() => [
    this.selectedAuthor(),
    this.selectedCountry(),
    this.selectedPublisher()
  ].filter(Boolean).length);

  readonly filteredBooks = computed(() => {
    const query = this.debouncedTerm().toLowerCase().trim();
    const author = this.selectedAuthor();
    const country = this.selectedCountry();
    const publisher = this.selectedPublisher();

    const booksResults = this.allBooks().filter(book => {
      const matchesSearch = !query ||
        book.name.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        book.publisher.toLowerCase().includes(query) ||
        book.country.toLowerCase().includes(query);

      return matchesSearch &&
        (!author || book.author === author) &&
        (!country || book.country === country) &&
        (!publisher || book.publisher === publisher);
    });

    return this.orderBooks(booksResults);
  });
  readonly visibleBookStartIndex = computed(() => Math.max(
    0,
    Math.floor(this.booksScrollTop() / this.bookItemHeight) - this.overscan
  ));
  readonly visibleBookEndIndex = computed(() => Math.min(
    this.filteredBooks().length,
    Math.ceil((this.booksScrollTop() + this.booksViewportHeight()) / this.bookItemHeight) + this.overscan
  ));
  readonly visibleBooks = computed(() =>
    this.filteredBooks().slice(this.visibleBookStartIndex(), this.visibleBookEndIndex())
  );
  readonly topSpacerHeight = computed(() => this.visibleBookStartIndex() * this.bookItemHeight);
  readonly bottomSpacerHeight = computed(() =>
    (this.filteredBooks().length - this.visibleBookEndIndex()) * this.bookItemHeight
  );

  onSearch(term: string) {
    this.searchTerm.set(term);
  }

  toggleFilters() {
    this.filtersOpen.update(isOpen => !isOpen);
  }

  onAuthorChange(value: string) {
    this.selectedAuthor.set(value);
  }

  onCountryChange(value: string) {
    this.selectedCountry.set(value);
  }

  onPublisherChange(value: string) {
    this.selectedPublisher.set(value);
  }

  clearFilters() {
    this.selectedAuthor.set('');
    this.selectedCountry.set('');
    this.selectedPublisher.set('');
  }

  logout() {
    this.auth.logout();
  }

  onBookListScroll(event: Event) {
    const viewport = event.target as HTMLElement;
    this.booksScrollTop.set(viewport.scrollTop);
    this.booksViewportHeight.set(viewport.clientHeight);
  }

  drop(event: CdkDragDrop<Book[]>) {
    if (event.previousContainer !== event.container) {
      return;
    }

    const reorderedBooks = [...this.filteredBooks()];
    moveItemInArray(
      reorderedBooks,
      this.visibleBookStartIndex() + event.previousIndex,
      this.visibleBookStartIndex() + event.currentIndex
    );

   const visibleIds = new Set(reorderedBooks.map(book => book.id));
    let nextVisibleBook = 0;
    const reorderedAllBooks = this.orderBooks(this.allBooks()).map(book =>
      visibleIds.has(book.id) ? reorderedBooks[nextVisibleBook++] : book
    );

    this.bookOrder.set(reorderedAllBooks.map(book => book.id));
  }

  private getFilterOptions(key: 'author' | 'country' | 'publisher') {
    return [...new Set(
      this.allBooks()
        .map(book => book[key])
        .filter(Boolean)
    )].sort((first, second) => first.localeCompare(second));
  }

  private orderBooks(books: Book[]): Book[] {
    const positions = new Map(this.bookOrder().map((id, index) => [id, index]));

    return [...books].sort((first, second) =>
      (positions.get(first.id) ?? Number.MAX_SAFE_INTEGER) -
      (positions.get(second.id) ?? Number.MAX_SAFE_INTEGER)
    );
  }

  //DELETE GOES HERE

}
