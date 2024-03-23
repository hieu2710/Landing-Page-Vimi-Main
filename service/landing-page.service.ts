import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LandingPageService {
// private urlApi= 'http://localhost:3000';
private urlApi = 'https://backend-admin-vimi.vercel.app' // deploy vercel
// private urlApi = 'http://vimi.vn:8011' // deploy server
  constructor(private http: HttpClient) { }

    sendInforUser(inforUser: {
      name: string;
      phone: string;
    }) {
      console.log("inforUser in service", inforUser)
      // Thiết lập headers
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

      return this.http.post(`${this.urlApi}/api/user`, inforUser, { headers });
    }

    getUsers() {
      return this.http.get(`${this.urlApi}/api/user`);
    }
}
