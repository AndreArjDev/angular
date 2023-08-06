import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Quote } from '../model/quote';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private httpClient: HttpClient) { }

  //transformar em duas linhas
  buscar(quantidade: number): Observable<Quote[]>{
    return this.httpClient.get<Quote[]>(`https://api.breakingbadquotes.xyz/v1/quotes/${quantidade}`)
    .pipe(map((quotes: Quote[]) => quotes.map(quote => Quote.fromJson(quote))));

  }
}
