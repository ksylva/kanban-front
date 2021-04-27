import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import {SlideMenuModule} from 'primeng/slidemenu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UserComponent } from './components/user/user.component';
import { CardComponent } from './components/card/card.component';
import { TagComponent } from './components/tag/tag.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    UserComponent,
    CardComponent,
    TagComponent
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
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
