import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weapon } from '../models/entities';
import { GLOBAL } from '../environments/global';

@Injectable({
  providedIn: 'root'
})
export class WeaponService {

  private _http: HttpClient = inject(HttpClient);



  getWeaponByType(type: string): Observable<Weapon[]> {
    return this._http.get<Weapon[]>(GLOBAL.url_weapons + type);
  }


  getAllWeapons(): Observable<Weapon[]> {
    return this._http.get<Weapon[]>(GLOBAL.url_weapons);
  }

}
