import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BoardInfo, Card, CardInfo, Kanban, Section, Tag} from '../_models/kanban-model';


@Injectable({
  providedIn: 'root'
})
export class KanbanBoardService {

  constructor(private httpClient: HttpClient) { }

  rootUrl = '/kanban';

  getBoards(): Observable<Kanban[]> {
    return this.httpClient.get<Kanban[]>(this.rootUrl + '/boards');
  }

  saveBoard(table: BoardInfo) {
    return this.httpClient.post(this.rootUrl + '/board/add', table);
  }

  getCards(): Observable<Card[]> {
    return this.httpClient.get<Card[]>(this.rootUrl + '/cards');
  }

  getCardById(id: number): Observable<Card> {
    return this.httpClient.get<Card>(this.rootUrl + '/card/' + id);
  }

  saveCard(card: CardInfo) {
    return this.httpClient.post(this.rootUrl + '/card/add', card);
  }
  getTags(): Observable<Tag[]> {
    return this.httpClient.get<Tag[]>(this.rootUrl + '/tags');
  }
  saveTag(tag: Tag) {
    return this.httpClient.post<Tag>(this.rootUrl + '/tag/add', tag);
  }
  getTable(tableId: number): Observable<Kanban> {
    return this.httpClient.get<Kanban>(this.rootUrl + '/board/' + tableId);
  }
  getSectionsOfTable(tableId: number): Observable<Section[]> {
    return this.httpClient.get<Section[]>(this.rootUrl + '/sections/' + tableId);
  }
  deleteTag(idTag: number): Observable<Tag> {
    return this.httpClient.delete<Tag>(this.rootUrl + '/tag/delete/' + idTag);
  }
  getTagById(idTag: number): Observable<Tag> {
    return this.httpClient.get<Tag>(this.rootUrl + '/tag/' + idTag);
  }
  updateTag(tag: Tag): Observable<Tag> {
    return this.httpClient.put<Tag>(this.rootUrl + '/tag/edit/' , tag);
  }
}
