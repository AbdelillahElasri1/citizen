import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';



@Injectable({
  providedIn: 'root'
})
export class JwtDecodeService {

  constructor() { }

  decodeToken(token: string): any {
    try {
      return jwtDecode(token);
    } catch (Error) {
      console.error('Error decoding JWT token:', Error);
      return null;
    }
  }
}
