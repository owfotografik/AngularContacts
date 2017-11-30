import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  
  @Input() contact: Contact;

  constructor() { }

  ngOnInit() {
    //this.model = new Contact('brubble', 'Betty', 'Rubble');
    //get contact from local storage
    //let angularContacts = JSON.parse(localStorage.getItem("AngularContacts"));
    //this.contact = new Contact(angularContacts.id, angularContacts.firstName, angularContacts.lastName);
  }

  // if (data) {
  //   this.model = JSON.parse(data);
  // }
  // else {
  //   this.model = new Contact("", "", "");
  // }


 // save() {
   // localStorage.setItem('AngularContacts', JSON.stringify(this.contact))
  //}

}
