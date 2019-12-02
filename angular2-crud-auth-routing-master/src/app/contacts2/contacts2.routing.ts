import { Routes, RouterModule } from '@angular/router';

import { Contacts2Component } from './contacts2.component';
import { Contact2StartComponent } from './contact2-start.component';
import { Contact2FormComponent } from './contact2-form/contact2-form.component';
import { Contact2DetailComponent } from './contact2-detail/contact2-detail.component';
import { Contact2FormGuard } from './contact2-form/contact2-form.guard';

const CONTACTS_ROUTES: Routes = [
  { path: '', component: Contacts2Component, children: [
      { path: '', component: Contact2StartComponent },
      { path: 'new', component: Contact2FormComponent ,
        canDeactivate: [Contact2FormGuard]},
      { path: ':id', component: Contact2DetailComponent },
      { path: ':id/edit', component: Contact2FormComponent,
        canDeactivate: [Contact2FormGuard]}
  ]}
];

export const contacts2Routing = RouterModule.forChild(CONTACTS_ROUTES);
