import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../models/entities';
import { GLOBAL } from '../environments/global';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private _http: HttpClient = inject(HttpClient);


  getAllSkills(): Observable<Skill[]> {
    return this._http.get<Skill[]>(GLOBAL.url_skills);
  }
}
