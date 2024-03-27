import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  // validation
  firstname = "";
  lastname = "";
  email = "";
  password="";
  confirmPassword = "";
  valid = {
    firstname: true,
    lastname: true,
    email: true,
    password: true,
  };

  ngOnInit(): void {
      
  }

  validate(type: string): void {
    const firstnamePattern = /^[\w-.]*$/;
    const lastnamePattern = /^[\w-.]*$/;
    const emailPattern = /\S+@\S+\.\S+/;

    if (type == "firstname"){
      if(this.firstname.length < 5){
        this.valid.firstname = false;
      }else {
        this.valid.firstname = firstnamePattern.test(this.firstname);
      }
    } else if (type == "lastname"){
      if(this.lastname.length < 5){
        this.valid.lastname = false;
      } else {
        this.valid.lastname = lastnamePattern.test(this.lastname);
      }
    } else if (type === "email") {
      this.valid.email = emailPattern.test(this.email);
    } else if (type === ("confirmPassword" || "password")) {
      if (this.password !== this.confirmPassword) {
        this.valid.password = false;
      } else {
        this.valid.password = true;
      }
    }

  }

  onKey(event: any, type: string) {
    if (type === "firstname") {
      this.firstname = event.target.value;
    } else if(type == "lastname"){
      this.lastname = event.target.value;
    } else if (type === "email") {
      this.email = event.target.value;
    } else if (type === "password") {
      this.password = event.target.value;
    } else if (type === "confirmPassword") {
      this.confirmPassword = event.target.value;
    }
    this.validate(type);
  }


  // register logic

  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    userRole: ''
  }
  constructor(private authService: AuthService,private router: Router){}

  register() {
    this.authService.register(this.user).subscribe(response => {
      console.log(response);
      this.router.navigate(["/login"])
    },error => {
      console.log(error);
    })
  }


}
