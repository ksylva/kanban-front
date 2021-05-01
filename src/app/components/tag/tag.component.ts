import { Component, OnInit } from '@angular/core';
import {KanbanBoardService} from '../../_services/kanban-board.service';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MessageService} from 'primeng/api';
import {Card, Tag} from '../../_models/kanban-model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
  tags: Tag[] = [];
  first = 0;
  rows = 5;
  display = false;
  tagForm!: FormGroup;

  constructor(private kbService: KanbanBoardService, private fBuilder: FormBuilder,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.getAllTags();
    // this.size = this.tables.length;
    this.tagForm = this.fBuilder.group({
      libelleTag: ['', Validators.required],
    });

  }

  getAllTags() {
    this.kbService.getTags()
      .subscribe((data) => {
        data.forEach((value) => {
          this.tags.push(value);
        });
      });
  }
  deleteTag(tag: Tag): void {
    this.kbService.deleteTag(tag.idTag)
      .subscribe( data => {
        this.tags = this.tags.filter(u => u !== tag);
      });
  }
  editTag(tag: Tag): void {
    this.kbService.updateTag(tag)
      .subscribe(data => {this.tags.filter(u => u !== tag); });
  }

  // tslint:disable-next-line:typedef
  addTagDialog() {
    this.tagForm.reset();
    this.display = true;
  }

  // tslint:disable-next-line:typedef
  addTag() {
    this.kbService.saveTag(this.tagForm.value)
      .subscribe(() => {
        this.display = false;
        this.showToast();
      });
    this.getAllTags();
  }
 /* get users(): FormArray {
    return this.cardForm.get('users') as FormArray;
  }*/

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
    return this.tags ? this.first === (this.tags.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.tags ? this.first === 0 : true;
  }

  // tslint:disable-next-line:typedef
  showToast() {
    this.messageService.add({severity: 'success', summary: 'Info', detail: 'Votre tag a été ajouté'});
  }

  // tslint:disable-next-line:typedef
  clear() {
    this.messageService.clear();
  }

}
