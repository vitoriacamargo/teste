import { Contact2DetailComponent } from './../contact2-detail/contact2-detail.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription, Observable } from 'rxjs/Rx';

import { ContactsService } from '../contacts2.service';
import { Contact2 } from '../contact2';
import { BasicValidators } from '../../shared/basic-validators';
import { ComponentCanDeactivate } from './contact2-form.guard';

@Component({
  selector: 'app-contact2-form',
  templateUrl: './contact2-form.component.html',
  styleUrls: ['./contact2-form.component.scss']
})
export class Contact2FormComponent implements OnInit, OnDestroy, ComponentCanDeactivate {

  form: FormGroup;
  private contact2Index: number;
  private title: string;
  private isNew: boolean = true;
  private contact2: Contact2;
  private subscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private contacts2Service: ContactsService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.contact2Index = +params['id'];
          this.contacts2Service.get(this.contact2Index)
          .subscribe(data => this.contact2 = data);
          this.title = 'Edit contact2';
        } else {
          this.isNew = true;
          this.contact2 = new Contact2();
          this.title = 'New contact2';
        }
        this.initForm();
      }
    );
  }

  private initForm() {
    this.form = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      email: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      phone: this.formBuilder.group({
        phoneNumber: ['', [
          Validators.required,
          Validators.minLength(7)
        ]], 
      })
    });
  }

  onCancel() {
    this.navigateBack();
  }

  private navigateBack() {
    this.router.navigate(['/contacts']);
  }

  onSave() {
    const contactValue = this.form.value;
    let result;

    if (this.isNew){
      result = this.contacts2Service.update(contactValue);
    } else {
      result = this.contacts2Service.add(contactValue);
    }

    this.form.reset();

    result.subscribe(data => this.navigateBack(),
    err => {
      alert("An error occurred.");
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (this.form.dirty) {
      return confirm('Do you want to leave this page?');
    }
    return true;
  }
}
