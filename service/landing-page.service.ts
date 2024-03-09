import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LandingPageService {
private urlApi= 'http://localhost:3000';
  constructor(private http: HttpClient) { }

    getUsers() {
      return this.http.get(`${this.urlApi}/api/landing-page`);
    }
}
