import { Component, OnInit } from '@angular/core';
import { Kanban } from 'src/app/_models/kanban-model';
import {KanbanBoardService} from '../../_services/kanban-board.service';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  tables: Kanban[] = [];
  first = 0;
  rows = 5;
  display = false;
  boardForm!: FormGroup;

  constructor(private kbService: KanbanBoardService, private fBuilder: FormBuilder,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.getAllBoards();
    // this.size = this.tables.length;
    this.boardForm = this.fBuilder.group({
      name: ['', Validators.required],
      sections: this.fBuilder.array([
        this.fBuilder.group({
          libelle: ['', Validators.required]
        }),
        this.fBuilder.group({
          libelle: ['', Validators.required]
        }),
        this.fBuilder.group({
          libelle: ['', Validators.required]
        }),
      ])
    });
  }

  // tslint:disable-next-line:typedef
  getAllBoards() {
    this.kbService.getBoards()
      .subscribe((data) => {
        data.forEach((value) => {
          // console.log('L\identifiant: ' + value.idKanbanBoard);
          this.tables.push(value);
        });
      });
  }

  // tslint:disable-next-line:typedef
  addBoardDialog() {
    this.boardForm.reset();
    this.display = true;
  }

  // tslint:disable-next-line:typedef
  addBoard() {
    this.kbService.saveBoard(this.boardForm.value)
      .subscribe(() => {
        this.display = false;
        this.showToast();
      });
    this.getAllBoards();
  }

  get sections(): FormArray {
    return this.boardForm.get('sections') as FormArray;
  }

  // tslint:disable-next-line:typedef
  next() {
    this.first = this.first + this.rows;
  }

  // tslint:disable-next-line:typedef
  prev() {
    this.first = this.first - this.rows;
  }

  // tslint:disable-next-line:typedef
  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.tables ? this.first === (this.tables.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.tables ? this.first === 0 : true;
  }

  // tslint:disable-next-line:typedef
  showToast() {
    this.messageService.add({severity: 'success', summary: 'Info', detail: 'Votre tableau a été ajouté'});
  }

  // tslint:disable-next-line:typedef
  clear() {
    this.messageService.clear();
  }
}
