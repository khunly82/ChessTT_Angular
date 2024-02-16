import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { TokenModel } from 'src/app/core/models/token.model';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../models/login.model';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly _http: HttpClient
  ) { }

  login(model: LoginModel) : Observable<TokenModel> {
    return this._http.post<{ token: string, user: UserModel}>(environment.apiBaseUrl + '/login', model).pipe(
      map(({token, user}) => <TokenModel>({ 
        token: token,
        ...user
      }))
    );
  }
}
