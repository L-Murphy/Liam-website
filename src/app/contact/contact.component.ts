import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, NgForm } from '@angular/forms';
import { ContactForm } from '../contact-form';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NetlifyFormsService } from '../netlify-form/netlify-forms.service';

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
  error: boolean;


  constructor(private http: HttpClient, private netlifyForms: NetlifyFormsService) {    
    this.submitted = false;
    this.error = false;
    this.form = new ContactForm("", "", "", "");
   }

  ngOnInit(): void {

  }

  onSubmit(): void {   
    this.netlifyForms.submitFeedback(this.form).subscribe(
      () => {
        this.submitted = true;
        this.clearForm();
      },
      err =>{
        this.error = true;
        console.log(err.toString());
      }
    )
    
  }

  //Used for local testing of emails. 
  private sendEmail(form: ContactForm): void {
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
