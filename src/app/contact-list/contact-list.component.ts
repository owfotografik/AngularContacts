import { Component, OnInit } from '@angular/core';

import { ContactsService } from '../services/contacts.service';
import { HttpContactsService } from '../services/http-contacts.service';

import {Contact} from '../models/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];

  constructor(private dataService: ContactsService) { }

  ngOnInit() {
    this.dataService.getContacts().subscribe(contacts => {
      this.contacts = contacts;
    })
  }

}
