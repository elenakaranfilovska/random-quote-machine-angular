import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from './quote';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private http: HttpClient) { }

  getQuotes(): Observable<Quote> {
    console.log('Get Quotes');
    return this.http.get<Quote>('http://api.quotable.io/random');
  }

  

}
