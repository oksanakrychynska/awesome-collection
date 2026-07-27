import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import { MatListModule } from '@angular/material/list';


@Component({
  selector: 'app-collection-details',
  imports: [MatListModule],
  templateUrl: './collection-details.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './collection-details.scss',
})
export class CollectionDetails implements OnInit {
  value!: number;

  constructor() {}

  ngOnInit() {
  }

}
