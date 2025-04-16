import { Component, inject, OnInit } from '@angular/core';
import { MonsterIconComponent } from '../monster-icon/monster-icon.component';
import { MonsterService } from '../../../core/services/monster.service';
import { Monster } from '../../../core/models/entities';
import { monsterIconData } from '../../../core/models/auxiliaries';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-monster-list',
  imports: [MonsterIconComponent, RouterLink],
  templateUrl: './monster-list.component.html',
  styleUrl: './monster-list.component.css'
})
export class MonsterListComponent implements OnInit {
  ngOnInit(): void {
    this.getData();
  }

  ////////////////////////////
  nPhase = 1;
  actualPhase = 0;
  dataLoaded = false;
  ////////////////////////////

  private _monsterService: MonsterService = inject(MonsterService);
  private _router : Router = inject(Router)

  monsters: monsterIconData[] = [];

  getData(): void {
    this._monsterService.getAllMonsters().subscribe({
      next: (data) => {

        data.forEach((monster) => {

          const monsterData: monsterIconData = { icon: "", monster: "", id: 0 };
          monsterData.id = monster?.id;
          monsterData.monster = monster.name;
          monsterData.icon = monster.icon.name;
          console.log(monsterData);
          this.monsters.push(monsterData);
        });
        console.log(this.monsters);
      },
      error: () => {this._router.navigate(['/error'])},
      complete: () => { this.loadData()}
    })
  }


  loadData(){
    this.actualPhase ++;
    if(this.actualPhase === this.nPhase){
      this.dataLoaded = true;
    }
  }

}
