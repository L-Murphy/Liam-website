import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, NgForm } from '@angular/forms';
import { ContactForm } from '../contact-form';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: ContactForm;
  submitted: boolean;
  constructor() {    
    this.submitted = false;
    this.form = new ContactForm("", "", "", "");
   }

  ngOnInit(): void {

  }

  onSubmit(): void {
    console.log("Submitted with name: " + this.form.name 
      + "\nSubmitted with company: " + this.form.company 
      + "\nSubmitted with email: " + this.form.email 
      + "\nSubmitted with message: " + this.form.message);
    //I should do something with this data like send it to a server that then emails me?? just a thought
    this.submitted = true;
    this.clearForm();
  }

  clearForm(): void {
    this.form = new ContactForm("", "", "", "")
  }

}
