import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Kanban } from './_models/kanban-model';
import {KanbanBoardService} from './_services/kanban-board.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Kanban board web application';

  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items.push({ label: 'Menu of kanban'});
    this.items.push(
      {
        label: 'Tables',
        icon: 'pi pi-fw pi-table',
        routerLink: 'tables'
      },
      {
        label: 'Fiches',
        icon: 'pi pi-fw pi-credit-card',
        routerLink: 'cards'
      },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-users',
        routerLink: 'users'
      },
      {
        label: 'Tags',
        icon: 'pi pi-fw pi-tags',
        routerLink: 'tags'
      }
    );
  }
}
