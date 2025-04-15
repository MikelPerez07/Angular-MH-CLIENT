import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MotionValue, Weapon } from '../models/entities';
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

  getWeaponById(id: number): Observable<Weapon> {
    return this._http.get<Weapon>(GLOBAL.url_weapon + id);
  }

  getMotionValueByWeaponType(type: string): Observable<MotionValue> {
    return this._http.get<MotionValue>(GLOBAL.url_motion_values + "weapon-type/" + type);
  }

  getUpgradeWeapons(id: number): Observable<Weapon> {

    return this._http.get<Weapon>(GLOBAL.url_weapon + id + "/upgrades");
  }

  getPrevious(id: number): Observable<Weapon> {
    return this._http.get<Weapon>(GLOBAL.url_weapon + id + "/previous");
  }
}
