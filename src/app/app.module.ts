import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'; // Import Forms Module

import{ LocalStorageContactsService } from './services/local-storage-contacts.service'; //import contacts service
import { HttpContactsService } from './services/http-contacts.service';
import { ContactsService } from './services/contacts.service';

import { AppComponent } from './app.component';

import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListComponent } from './contact-list/contact-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactFormComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // using the import variable above to implement
    HttpClientModule //use this to ask for Json data

  ],
  providers: [
   { provide: ContactsService, useClass: HttpContactsService }
  ], //provide the contacts service and make it use the class of HttpContactsService

  bootstrap: [AppComponent]
})
export class AppModule { }
