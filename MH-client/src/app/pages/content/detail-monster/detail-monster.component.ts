import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MonsterService } from '../../../core/services/monster.service';
import { QuestsComponent } from '../../../shared/components/quests/quests.component';
import { Monster } from '../../../core/models/entities';
import { GLOBAL } from '../../../core/environments/global';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-detail-monster',
  imports: [QuestsComponent, MatTableModule],
  templateUrl: './detail-monster.component.html',
  styleUrl: './detail-monster.component.css'
})
export class DetailMonsterComponent implements OnInit {

  ngOnInit(): void {
    this.getData();

    this._routerSubscription = this._route.params.subscribe(params => {
      this.monsterId = params['id'];
      this.getData(); // Método que recarga los datos
    });


  }

  ////
  nPhase: number = 1;
  actualPhase: number = 0;
  dataLoaded: boolean = false;
  ////

  displayedColumns: string[] = ['name', 'sever', 'blunt', 'shot', "fire", "water", "thunder", "ice", "dragon"];


  private _routerSubscription: Subscription;
  private _route: ActivatedRoute = inject(ActivatedRoute);
  private _monsterService: MonsterService = inject(MonsterService);
  private _router: Router = inject(Router);

  monsterId: number = 0;
  monster: Monster;
  url: string;

  getData(): void {
    //get monster data

    this._monsterService.getMonsterById(this.monsterId).subscribe({
      next: (data) => {

        this.monster = data;
        console.log(this.monster)
        console.log(data);
        this.url = GLOBAL.url_monster_icon + data.icon.name;
      },
      error: (error) => {
        this._router.navigate(['/error']);
      },
      complete: () => { this.isDataLoaded(); }
    });
  }


  isDataLoaded(): void {
    this.actualPhase++;
    if (this.actualPhase === this.nPhase) {
      this.dataLoaded = true;
    }
  }
}
