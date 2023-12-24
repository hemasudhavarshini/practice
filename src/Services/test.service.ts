import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor(private http: HttpClient) {}

  getContent(url: string): Observable<string> {
    return this.http.get(url, { responseType: 'text' });
  }

}
