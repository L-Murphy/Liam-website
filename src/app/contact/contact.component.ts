import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, NgForm } from '@angular/forms';
import { ContactForm } from '../contact-form';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
@Injectable()
export class ContactComponent implements OnInit {

  form: ContactForm;
  submitted: boolean;
  postId: any;


  constructor(private http: HttpClient) {    
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
    this.sendEmail(this.form);
    this.submitted = true;
    this.clearForm();
  }

  //I have a local node server to handle this request. Will not work live as is
  sendEmail(form: ContactForm): void {
    var url = "http://localhost:8000/email";
    const body = {
        name: form.name,
        company: form.company,
        email: form.email, 
        message: form.message
      };
    this.http.post<any>(url, body).subscribe(
      data => {
        this.postId = data.id;
        console.log(data.id);
      }
    );
  }

  clearForm(): void {
    this.form = new ContactForm("", "", "", "")
  }

}
