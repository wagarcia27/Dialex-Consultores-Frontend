import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactoService {
  private apiUrl = 'https://dialex-consultores-backend.onrender.com/api/contactos'; // Cambia esto por la URL real de tu API

  constructor(private http: HttpClient) {}

  sendContactForm(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
