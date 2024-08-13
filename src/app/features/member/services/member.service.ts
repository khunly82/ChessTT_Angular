import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  checkUsername(username: string, id: string|null): Observable<void> {
    let params = new HttpParams();
    params = params.append('username', username);
    if(id) {
      params = params.append('id', id);
    }
    return this._httpClient.head<void>(environment.apiBaseUrl + '/member', {params});
  }

  checkEmail(email: string, id: string|null): Observable<void> {
    let params = new HttpParams();
    params = params.append('email', email);
    if(id) {
      params = params.append('id', id);
    }
    return this._httpClient.head<void>(environment.apiBaseUrl + '/member', {params});
  }

  register(form: any): Observable<void> {
    return this._httpClient.post<void>(environment.apiBaseUrl + '/member', form);
  }
}
