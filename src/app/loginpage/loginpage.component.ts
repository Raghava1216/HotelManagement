import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  loading = false;
  submitted = false;
  constructor() { }

  ngOnInit(): void {
  }
  
  public onSubmit() {
    alert('Onsubmit');
    this.submitted = true;
  }
}
