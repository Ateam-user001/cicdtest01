import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export interface Poll {
  id: number;
  question: string;
  thcount: number;
}

@Injectable({
  providedIn: 'root'
})
export class PollService {

  private apiUrl = 'http://localhost:8080/api/polls';

  /** ログ出力用メソッド */
  private log(message: string): void {
    console.log(message);
  }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }
 

  getPolls(): Observable<Poll[]> {
    return this.http.get<Poll[]>(this.apiUrl);
  }

  updatePoll(post: Poll[]): Observable<any> {
    const pollId = 1; 
    const url = `${this.apiUrl}/${pollId}/edit`;
    console.log(post);
    
    // putリクエストを送信
    return this.http.put<any>(url, post, this.httpOptions).pipe(
      catchError(this.handleError<any>('updatePoll'))
    );
  }

  /** Observable用のエラーハンドラ */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return new Observable<T>(observer => {
        observer.next(result as T);
        observer.complete();
      });
    };
  }

}



