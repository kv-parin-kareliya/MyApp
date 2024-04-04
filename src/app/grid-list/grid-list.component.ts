import { Component } from '@angular/core';
import {NgFor} from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-grid-list',
  standalone: true,
  imports: [
    MatGridListModule,
    NgFor
  ],
  templateUrl: './grid-list.component.html',
  styleUrl: './grid-list.component.scss'
})

export class GridListDynamicExample {
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
}

export class GridListComponent {

}
