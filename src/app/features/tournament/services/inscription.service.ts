import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  register(id: string): Observable<void> {
    return this._httpClient.post<void>(environment.apiBaseUrl + '/tournamentInscription/' + id, null);
  }

  unregister(id: string): Observable<void> {
    return this._httpClient.delete<void>(environment.apiBaseUrl + '/tournamentInscription/' + id);
  }
}
