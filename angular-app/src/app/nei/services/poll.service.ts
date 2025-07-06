import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';


export interface Poll {
  id: number;
  question: string;
  thcount: number;
}

export interface Answerlist {
  sex: string;
  age: string;
  select_num: number;
}

@Injectable({
  providedIn: 'root'
})
export class PollService {

  // APIのURLを環境変数から取得
  // ローカル用、サーバ用が異なるため、プロパティファイルから取得
  private apiUrl = `${environment.apiUrl}/api/polls`;

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
  
   insertAnswerlist(post: Answerlist): Observable<any> {
    const url = `${this.apiUrl}/insert`;
    console.log(post);
    
    // postリクエストを送信
    return this.http.post<any>(url, post, this.httpOptions).pipe(
      catchError(this.handleError<any>('insertAnswerlist'))
    );
    
  }

   getAnswerlist(): Observable<Answerlist[]> {
    const url = `${this.apiUrl}/answerlist`;
    console.log(url);
    return this.http.get<Answerlist[]>(url);
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



