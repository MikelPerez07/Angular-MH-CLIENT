import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL } from '../environments/global';
import { Monster, Quest } from '../models/entities';

@Injectable({
  providedIn: 'root'
})
export class QuestService {

  private _http: HttpClient = inject(HttpClient);

  getQuestById(id: number): Observable<Quest> {
    return this._http.get<Quest>(GLOBAL.url_monster + id);
  }

  getAllMonsters(): Observable<Quest[]> {
    return this._http.get<Quest[]>(GLOBAL.url_monsters);
  }

  
}
