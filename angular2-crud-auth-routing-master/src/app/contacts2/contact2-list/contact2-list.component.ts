import { Component, OnInit } from '@angular/core';

import { ContactsService } from '../contacts2.service';
import { Contact2 } from '../contact2';

@Component({
  selector: 'app-contact2-list',
  templateUrl: './contact2-list.component.html',
  styleUrls: ['./contact2-list.component.scss']
})
export class Contact2ListComponent implements OnInit {

  contacts2: Contact2[] = [];

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.contactsService.getAll()
    .subscribe(data => this.contacts2 = data,error => {
      alert('Aconteceu um erro!');
    });

    this.contactsService.contactsChanged.subscribe(
      (observable: any) => observable.subscribe(
        data => this.contacts2 = data
      )
    );
  }

}
