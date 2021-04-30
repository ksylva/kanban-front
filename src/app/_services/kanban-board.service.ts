import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BoardInfo, Card, Kanban, Section} from '../_models/kanban-model';

@Injectable({
  providedIn: 'root'
})
export class KanbanBoardService {

  constructor(private httpClient: HttpClient) { }

  rootUrl = '/kanban';

  getBoards(): Observable<Kanban[]> {
    // console.log(`The content of route: ${this.rootUrl}`);
    return this.httpClient.get<Kanban[]>(this.rootUrl + '/boards');
  }

  saveBoard(table: BoardInfo) {
    return this.httpClient.post(this.rootUrl + '/board/add', table);
  }

  getCards(): Observable<Card[]> {
    /*console.log(`The content of route2: ${this.rootUrl}`);*/
    return this.httpClient.get<Card[]>(this.rootUrl + '/cards');
  }

  getCardById(id: number): Observable<Card> {
    return this.httpClient.get<Card>(this.rootUrl + '/card/' + id);
  }

  /*saveCard(value: Card) {
    return this.httpClient.post( this.rootUrl + '/board/add', value);
  }*/
  saveCard(card: Card): Observable<Card> {
    return this.httpClient.post<Card>(this.rootUrl + '/card/add', card);
  }

  getTable(tableId: number): Observable<Kanban> {
    return this.httpClient.get<Kanban>(this.rootUrl + '/board/' + tableId);
  }

  getSectionsOfTable(tableId: number): Observable<Section[]> {
    return this.httpClient.get<Section[]>(this.rootUrl + '/sections/' + tableId);
  }
}
