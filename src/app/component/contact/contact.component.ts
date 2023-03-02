import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name: string;
  email: string;
  object: string;
  message: string;

  constructor(private http: HttpClient) { }

  onSubmit() {
    const data = {
      name: this.name,
      email: this.email,
      object: this.object,
      message: this.message
    };
    console.log(data);
    this.http.post('/api/contact', data)
      .subscribe(response => {
        console.log(response);
      });
  }
}
