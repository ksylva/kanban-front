import { Component, OnInit } from '@angular/core';
import {KanbanBoardService} from '../../_services/kanban-board.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Kanban, Section, Card} from '../../_models/kanban-model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayEdit = false;
  displaySave = false;
  displayShow = false;
  tableId: number;
  tableName = '';
  sections: Section[] = [];
  cardsSect1: Card[] = [];
  cardsSect2: Card[] = [];
  cardsSect3: Card[] = [];
  selectedCard: Card;

  sectionId: number;
  form: FormGroup;
  date: Date;

  constructor(private kbService: KanbanBoardService, private route: ActivatedRoute,
              private router: Router, private fBuilder: FormBuilder, private messageService: MessageService) { }

  ngOnInit() {
    this.tableId = this.route.snapshot.params['table_id'];

    if (isNaN(this.tableId)) {
      return this.router.navigate(['/tables']);
    }

    this.getTableName(this.tableId);

    this.getTableSections(this.tableId);

    this.initForm();
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

  getTableName(id: number): void {
    this.kbService.getTable(id)
      .subscribe((table) => {
        this.tableName = table.name;
      });
  }

  getCard(id: number): void {
    this.kbService.getCardById(id)
      .subscribe((card) => {
        this.selectedCard = card;
      });
  }

  showEditDialog(id: number): void {
    // this.cardId = id;
    if (!this.displayShow) {
      this.getCard(id);
      this.displayEdit = true;
    }
  }
  showShowDialog(id: number): void {
    // this.cardId = id;

    if (!this.displayEdit) {
      this.getCard(id);
      this.displayShow = true;
    }
  }

  showSaveDialog(id: number): void {
    this.form.reset();
    if (!this.displayEdit || !this.displayShow) {
      this.sectionId = id;
      this.displaySave = true;
    }
  }

  initForm(): void {
    this.form = this.fBuilder.group({
      dateButoire: ['', Validators.required],
      duree: ['', Validators.required],
      lieu: ['', Validators.required],
      url: ['', Validators.required],
      section: [''],
      note: ['', Validators.required]
    });
  }

  addCard(): void {
    this.form.patchValue({section: {idSection: this.sectionId } });
    this.kbService.saveCard(this.form.value)
      .subscribe(() => {
        console.log('The card has added with succes!');
        this.displaySave = false;
        this.showToast();
        // window.location.reload();
      });
  }

  showToast(): void {
    this.messageService.add({severity: 'success', summary: 'Info', detail: 'Fiche ajoutée avec succès.'});
  }
}
