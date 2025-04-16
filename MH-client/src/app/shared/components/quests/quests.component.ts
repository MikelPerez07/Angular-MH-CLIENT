import { Component, inject, Input, OnInit } from '@angular/core';
import { Quest } from '../../../core/models/entities';
import { QuestService } from '../../../core/services/quest.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-quests',
  imports: [MatTableModule],
  templateUrl: './quests.component.html',
  styleUrl: './quests.component.css'
})
export class QuestsComponent implements OnInit {
  ngOnInit(): void {
    this.getData();
  }

  @Input() monsterId: number;

  private _questService: QuestService = inject(QuestService);

  quests: Quest[] = [];

  displayedColumns : string[] = ["type","name","description","questRank","location"]





  getData(): void {
    if (this.monsterId === undefined || this.monsterId === 0) {
      this._questService.getAllQuests().subscribe({
        next: (data) => {
          this.quests = data;

        },
        error: () => {
          //TODO make a component that appears if a component of a page (ej this table or monster data...) has an error getting the data
          //maybe better go to an error page
        },
        complete: () => { }
      });
    } else {
      this._questService.getQuestsByMonsterId(this.monsterId).subscribe({
        next: (data) => {
          this.quests = data;
          console.log(this.quests[0].location.name)

        },
        error: () => {
          //TODO make a component that appears if a component of a page (ej this table or monster data...) has an error getting the data
          //maybe better go to an error page
        },
        complete: () => { }
      });
    }

  }
}
