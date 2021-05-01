import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {CalendarModule} from 'primeng/calendar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SlideMenuModule} from 'primeng/slidemenu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UserComponent } from './components/user/user.component';
import { CardComponent } from './components/card/card.component';
import { TagComponent } from './components/tag/tag.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {RippleModule} from 'primeng/ripple';
import {MessageService} from 'primeng/api';
import {TablesComponent} from './components/tables/tables.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    TablesComponent,
    UserComponent,
    CardComponent,
    TagComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SlideMenuModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule,
    DialogModule,
    ReactiveFormsModule,
    InputTextModule,
    RippleModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    CalendarModule,
    FormsModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
