import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Card} from '../../_models/kanban-model';
import {KanbanBoardService} from '../../_services/kanban-board.service';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cards: Card[] = [];
  first = 0;
  rows = 5;
  display = false;
  cardForm!: FormGroup;

  constructor(private kbService: KanbanBoardService, private fBuilder: FormBuilder,
              private messageService: MessageService ) { }

  ngOnInit(): void {
    this.getAllCards();
    // this.size = this.tables.length;
    this.cardForm = this.fBuilder.group({
      dateButoire: ['', Validators.required],
      duree: ['', Validators.required],
      lieu: ['', Validators.required],
      url: ['', Validators.required],
      note: ['', Validators.required],
      section: ['', Validators.required],
      /*users: this.fBuilder.array([
        this.fBuilder.group({
          idUser: ['', Validators.required]
        }),
      ]),
      tags: this.fBuilder.array([
        this.fBuilder.group({
          idTag: ['', Validators.required]
        }),
      ]),
      sections: this.fBuilder.array([
        this.fBuilder.group({
          idSection: ['', Validators.required]
        }),
      ]),*/
    });
  }
  // tslint:disable-next-line:typedef
  getAllCards() {
        this.kbService.getCards()
      .subscribe((data) => {
        data.forEach((value) => {
         this.cards.push(value);
        });
      });
    }
  // tslint:disable-next-line:typedef
  addCardDialog() {
    this.cardForm.reset();
    this.display = true;
  }

  // tslint:disable-next-line:typedef
  addCard() {
    this.kbService.saveCard(this.cardForm.value)
      .subscribe(() => {
        this.display = false;
        this.showToast();
      });
    this.getAllCards();
  }
  get users(): FormArray {
    return this.cardForm.get('users') as FormArray;
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
    return this.cards ? this.first === (this.cards.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.cards ? this.first === 0 : true;
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

