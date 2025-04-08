import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MonsterIcon } from '../models/entities';
import { GLOBAL } from '../environments/global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonsterIconService {

  private _http: HttpClient = inject(HttpClient);


  getMonsterIconByUrl(url: string): Observable<MonsterIcon> {
    console.log("url " + GLOBAL.url_monster_icon + url);
    return this._http.get<MonsterIcon>(GLOBAL.url_monster_icon + url);
  }
}
