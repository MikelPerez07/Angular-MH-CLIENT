import { inject, Injectable } from '@angular/core';
import { Monster } from '../models/entities';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../environments/global';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {

  private _http: HttpClient = inject(HttpClient);

  getMonsterById(id: number): Observable<Monster> {
    return this._http.get<Monster>(GLOBAL.url_monster + id);
  }

  getAllMonsters(): Observable<Monster[]> {
    return this._http.get<Monster[]>(GLOBAL.url_monsters);
  }

  
}
