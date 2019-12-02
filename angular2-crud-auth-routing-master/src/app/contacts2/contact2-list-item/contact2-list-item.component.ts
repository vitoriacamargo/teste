import { Component, OnInit, Input } from '@angular/core';

import { Contact2 } from '../contact2';

@Component({
  selector: 'app-contact2-list-item',
  templateUrl: './contact2-list-item.component.html',
  styleUrls: ['./contact2-list-item.component.scss']
})
export class Contact2ListItemComponent implements OnInit {

  @Input() contact2: Contact2;

  constructor() { }

  ngOnInit() {
  }

}
