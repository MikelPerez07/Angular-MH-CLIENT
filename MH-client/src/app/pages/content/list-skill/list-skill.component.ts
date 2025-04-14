import { Component, inject, OnInit } from '@angular/core';
import { SkillService } from '../../../core/services/skill.service';
import { Skill } from '../../../core/models/entities';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-skill',
  imports: [],
  templateUrl: './list-skill.component.html',
  styleUrl: './list-skill.component.css'
})
export class ListSkillComponent implements OnInit {
  ngOnInit(): void {
    this.getData();
  }


  /////////////////////////////
  nPhase: number = 1;
  actualPhase: number = 0;
  dataLoaded: boolean = false;
  //////////////////////////////


  private _skillService: SkillService = inject(SkillService);
  private _router: Router = inject(Router);

  skills: Skill[] = [];


  getData(): void {
    this._skillService.getAllSkills().subscribe({
      next: (data) => {
        console.log(data);
        this.skills = data;
      },
      error: (error) => {
        this._router.navigate(['/error']);
      },
      complete: () => {
        this.isDataLoaded();
      }
    })
  }


  isDataLoaded(): void {
    this.actualPhase++;
    if (this.actualPhase === this.nPhase) {
      this.dataLoaded = true;
    }
  }
}
