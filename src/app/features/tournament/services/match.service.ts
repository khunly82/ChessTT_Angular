import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResultEnum } from '../enums/result.enum';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  updateMatch(id: number, result: ResultEnum) {
    return this._httpClient.patch(environment.apiBaseUrl + '/match/' + id + '/result', {result})
  }
}
