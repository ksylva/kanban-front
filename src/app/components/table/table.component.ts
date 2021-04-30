import { Component, OnInit } from '@angular/core';
import {KanbanBoardService} from '../../_services/kanban-board.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Kanban, Section, Card} from '../../_models/kanban-model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  tableId: number;
  tableName = '';
  sections: Section[] = [];
  cardsSect1: Card[] = [];
  cardsSect2: Card[] = [];
  cardsSect3: Card[] = [];

  constructor(private kbService: KanbanBoardService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.tableId = this.route.snapshot.params['table_id'];

    if (isNaN(this.tableId)) {
      return this.router.navigate(['/tables']);
    }

    this.getTableName(this.tableId);

    this.getTableSections(this.tableId);
  }

  getTableSections(id: number): void {
    this.kbService.getSectionsOfTable(id)
      .subscribe((sections) => {
        this.sections = sections;
        // console.log(`The section cards: ${sections[0].fiches[0].lieu}`);
        sections[0].fiches.forEach(value => {
          this.cardsSect1.push(value);
        });
        sections[1].fiches.forEach(value => {
          this.cardsSect2.push(value);
        });
        sections[2].fiches.forEach(value => {
          this.cardsSect3.push(value);
        });
      });
  }

  getTableName(id: number) {
    this.kbService.getTable(id)
      .subscribe((table) => {
        this.tableName = table.name;
      });
  }

}
