import { Component, OnInit } from '@angular/core';
import { Kanban } from 'src/app/_models/kanban-model';
import {KanbanBoardService} from '../../_services/kanban-board.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  tables: Kanban[] = [];
  first = 0;
  rows = 5;
  display: boolean = false;

  constructor(private kbService: KanbanBoardService) { }

  ngOnInit(): void {
    this.getAllBoards();
    // this.size = this.tables.length;
  }

  getAllBoards() {
    this.kbService.getBoards()
      .subscribe((data) => {
        console.log('The tables: ' + data);
        data.forEach((value) => {
          this.tables.push(value);
        });
      });
  }

  addBoardDialog() {
    this.display = true;
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.tables ? this.first === (this.tables.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.tables ? this.first === 0 : true;
  }


}
