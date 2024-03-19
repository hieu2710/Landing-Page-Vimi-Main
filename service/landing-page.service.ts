import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LandingPageService {
// private urlApi= 'http://localhost:3000';
private urlApi = 'https://backend-admin-vimi.vercel.app'
  constructor(private http: HttpClient) { }

    // getUsers() {
    //   return this.http.get(`${this.urlApi}/api/landing-page`);
    // }

    sendInforUser(inforUser: {
      name: string;
      phone: string;
    }) {
      console.log("inforUser in service", inforUser)
      return this.http.post(`${this.urlApi}/api/user`, inforUser);
    }
}
