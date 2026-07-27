import {Component, inject, signal, ChangeDetectionStrategy} from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import {MatTooltip} from '@angular/material/tooltip';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import {NgClass} from '@angular/common';
import {MatButton, MatIconButton} from '@angular/material/button';
import {RouterLink} from '@angular/router'
import {CollectionsStore, UserCollection} from './collections.store';
import {AuthService} from '../../core/auth/auth.service';


@Component({
  selector: 'app-collections',
  imports: [MatToolbar, MatIcon, MatTooltip, CdkDropList, CdkDropListGroup,
    CdkDrag, NgClass, MatIconButton, MatButton, RouterLink],
  templateUrl: './collections.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './collections.scss',
})
export class Collections {
  private readonly collections = signal<UserCollection[]>([]);
  public isDragging = signal(false);
  public readMode: boolean = true;
  public selectedElement: UserCollection | null = null;

  readonly store = inject(CollectionsStore);
  private readonly auth = inject(AuthService);

  constructor() {
  }

  get collectionList(): UserCollection[] {
    return this.collections();
  }

  createNewCollection() {
    const newCollection: UserCollection = {
      id: this.collections().length + 1,
      name: `new collection ${this.collections().length + 1}`,
      favorite: false,
    };
    this.collections.update(col => [
      ...col,
      newCollection
    ]);
  }

  drop(event: CdkDragDrop<UserCollection[]>) {
    if (event.previousContainer !== event.container) {
      return;
    }

    this.collections.update(collections => {
      const reordered = [...collections];
      moveItemInArray(reordered, event.previousIndex, event.currentIndex);
      return reordered;
    });
  }

  onDragging() {
    this.isDragging.set(true);
  }

  onDragEnded() {
    this.isDragging.set(false);
  }

  deleteItem(event: CdkDragDrop<UserCollection[]>) {
    const deletedCollection = event.item.data as UserCollection | undefined;
    if (deletedCollection) {
      this.collections.update(collections =>
        collections.filter(collection => collection.id !== deletedCollection.id)
      );
    }

    this.isDragging.set(false);
  }

  onEdit(collection: UserCollection) {
    this.selectedElement = collection;
    this.readMode = false;
  }

  onSave() {
    this.selectedElement = null;
    this.readMode = true;
  }

  logout() {
    this.auth.logout();
  }
}
