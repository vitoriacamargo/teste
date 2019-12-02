import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { ContactsInMemoryDS } from './contacts2-in-memory-ds';

import { Contacts2Component } from './contacts2.component';
import { Contact2StartComponent } from './contact2-start.component';
import { Contact2ListComponent } from './contact2-list/contact2-list.component';
import { Contact2FormComponent } from './contact2-form/contact2-form.component';
import { Contact2DetailComponent } from './contact2-detail/contact2-detail.component';
import { contacts2Routing } from './contacts2.routing';
import { ContactsService } from './contacts2.service';
import { Contact2ListItemComponent } from './contact2-list-item/contact2-list-item.component';
import { Contact2FormGuard } from './contact2-form/contact2-form.guard';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
      HttpModule,
      InMemoryWebApiModule.forRoot(ContactsInMemoryDS, { delay: 600 }),
      contacts2Routing
    ],
    declarations: [
      Contacts2Component,
      Contact2StartComponent,
      Contact2ListComponent,
      Contact2FormComponent,
      Contact2DetailComponent,
      Contact2ListItemComponent
    ],
    providers: [ ContactsService, Contact2FormGuard ]
})
export class Contacts2Module {}
