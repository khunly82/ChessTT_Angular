import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpUtils } from 'src/app/core/utils/http.utils';
import { environment } from 'src/environments/environment';
import { TournamentSearchModel } from '../models/tournament-search.model';
import { TournamentFormModel } from '../models/tournament-form.model';
import { TournamentModel } from '../models/tournament.model';
import { TournamentDetailsModel } from '../models/tournament-details.model';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  get(criteria: TournamentSearchModel): Observable<{ total: number, tournaments: TournamentModel[] }> {
    const params = HttpUtils.createHttpParams(criteria);
    return this._httpClient.get<{ total: number, results: TournamentModel[]}>(environment.apiBaseUrl + '/tournament', {params}).pipe(
      map(({total, results}) => ({
        tournaments: results,
        total: total,
        criteria
      }))
    );
  }

  getDetails(id: string): Observable<TournamentDetailsModel> {
    return this._httpClient.get<TournamentDetailsModel>(environment.apiBaseUrl + '/tournament/' + id);
  }

  add(tournament: TournamentFormModel): Observable<void> {
    return this._httpClient.post<void>(environment.apiBaseUrl + '/tournament', tournament);
  }

  delete(id: string): Observable<void> {
    return this._httpClient.delete<void>(environment.apiBaseUrl + '/tournament/' + id);
  }

  start(id: string) : Observable<void> {
    return this._httpClient.patch<void>(environment.apiBaseUrl + '/tournament/' + id + '/start', null);
  }

  nextRound(id: string): Observable<void> {
    return this._httpClient.patch<void>(environment.apiBaseUrl + '/tournament/' + id + '/nextRound', null);
  }
}
