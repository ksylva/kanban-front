import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BoardInfo, Card, Kanban, Tag} from '../_models/kanban-model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KanbanBoardService {

  constructor(private httpClient: HttpClient) { }

  rootUrl = '/kanban';

  getBoards(): Observable<Kanban[]> {
    /*console.log(`The content of route: ${this.rootUrl}`);*/
    return this.httpClient.get<Kanban[]>( this.rootUrl + '/boards');
  }

  saveBoard(table: BoardInfo) {
    return this.httpClient.post( this.rootUrl + '/board/add', table);
  }

  getCards(): Observable<Card[]> {
    /*console.log(`The content of route2: ${this.rootUrl}`);*/
    return this.httpClient.get<Card[]>(this.rootUrl + '/cards');
  }

  /*saveCard(value: Card) {
    return this.httpClient.post( this.rootUrl + '/board/add', value);
  }*/
  saveCard(card: Card) {
    return this.httpClient.post<Card>(this.rootUrl + '/card/add', card);
  }

  getTags(): Observable<Tag[]> {
    /*console.log(`The content of route2: ${this.rootUrl}`);*/
    return this.httpClient.get<Tag[]>(this.rootUrl + '/tags');
  }
  saveTag(tag: Tag) {
    return this.httpClient.post<Tag>(this.rootUrl + '/card/add', tag);
  }
}
