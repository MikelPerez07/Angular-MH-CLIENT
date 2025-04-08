import { Component, inject, OnInit } from '@angular/core';
import { MonsterIconComponent } from '../monster-icon/monster-icon.component';
import { MonsterService } from '../../../core/services/monster.service';
import { Monster } from '../../../core/models/entities';
import { monsterIconData } from '../../../core/models/auxiliaries';
import { RouterLink } from '@angular/router';

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

  private _monsterService: MonsterService = inject(MonsterService);

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
      error: () => { },
      complete: () => { }
    })
  }

}
