import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TablesComponent} from './components/tables/tables.component';
import {UserComponent} from './components/user/user.component';
import {CardComponent} from './components/card/card.component';
import {TagComponent} from './components/tag/tag.component';

const routes: Routes = [
  { path: 'tables', component: TablesComponent },
  { path: 'users', component: UserComponent },
  { path: 'cards', component: CardComponent },
  { path: 'tags', component: TagComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
