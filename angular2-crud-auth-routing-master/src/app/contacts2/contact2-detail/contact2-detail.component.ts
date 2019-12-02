import { Contact2FormComponent } from './../contact2-form/contact2-form.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { ContactsService } from '../contacts2.service';
import { Contact2 } from '../contact2';

@Component({
  selector: 'app-contact2-detail',
  templateUrl: './contact2-detail.component.html',
  styleUrls: ['./contact2-detail.component.scss']
})
export class Contact2DetailComponent implements OnInit, OnDestroy {

  selectedContact2: Contact2 ;
  private contact2Index: number;
  private subscription: Subscription;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private contactsService: ContactsService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.contact2Index = params['id'];
        this.contactsService.get(this.contact2Index)
        .subscribe(data => this.selectedContact2 = data);
      }
    );
  }

  onEdit() {
    this.router.navigate(['/contacts2', this.contact2Index, 'edit']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onDelete(){
    if (confirm("Are you sure you want to delete " + this.selectedContact2.name + "?")) {
      this.contactsService.remove(this.selectedContact2.id)
        .subscribe(
          data => this.router.navigate(['/contacts2']),
          err => {
            alert("Produto não removido.");
          });
    }
  }
}
