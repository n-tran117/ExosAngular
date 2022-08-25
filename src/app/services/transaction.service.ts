import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Transaction } from '../interfaces/transaction';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  messageService: string[];
  url = '/assets/data/transactions.json';

  constructor(private http: HttpClient) {}

  getTransaction(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.url).pipe(
      tap((_) => this.log('fetched transaction')),
      catchError(this.handleError<Transaction[]>('getTransaction', []))
    );
  }

  getTransactionById(id): Observable<Transaction[]> {
    var fileUrl = `/assets/data/${id}.json`;
    return this.http.get<Transaction[]>(fileUrl).pipe(
      tap((_) => this.log(`fetched transaction id : ${id}`)),
      catchError(this.handleError<Transaction[]>('getTransaction', []))
    );
  }

  /**
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(message: string) {
    console.log(`${message}`);
  }
}
