import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  model: Contact;

  constructor() { }

  ngOnInit() {
    //this.model = new Contact('brubble', 'Betty', 'Rubble');
    //get contact from local storage
    let angularContacts = JSON.parse(localStorage.getItem("AngularContacts"));
    this.model = new Contact(angularContacts.id, angularContacts.firstName, angularContacts.lastName);
  }

  // if (data) {
  //   this.model = JSON.parse(data);
  // }
  // else {
  //   this.model = new Contact("", "", "");
  // }


  save() {
    localStorage.setItem('AngularContacts', JSON.stringify(this.model))
  }

}
