import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { JwtDecodeService } from 'src/app/services/jwt-decode.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // validation
  
  email = "";
  password="";
  valid = {
    email: true,
    password: true,
  };


  ngOnInit(): void {
      
  }

  validate(type: string): void {
    const emailPattern = /\S+@\S+\.\S+/;
    if (type === "email") {
      this.valid.email = emailPattern.test(this.email);
    }

  }

  onKey(event: any, type: string) {
    if (type === "email") {
      this.email = event.target.value;
    } else if (type === "password") {
      this.password = event.target.value;
    } 
    this.validate(type);
  }



  // login logic 


  credentials = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router, private jwtDecodeService: JwtDecodeService){}

  login(){
    this.authService.login(this.credentials).subscribe((response: any) => {
      console.log(response);
      const token = response && response.token;

      if (token) {
        const decodedToken = this.jwtDecodeService.decodeToken(token);
        console.log('Decoded Token:', decodedToken);
        const userRoleArray = decodedToken && decodedToken.role;
        console.log('User Role:', userRoleArray);


        if (userRoleArray.includes('USER')) {
          this.router.navigate(['/home']);
        } else if (userRoleArray.includes('ADMIN')) {
          this.router.navigate(['/dashboard']);
        }
      }
      
    }, error => {
      console.log(error)
    });
  }




}
