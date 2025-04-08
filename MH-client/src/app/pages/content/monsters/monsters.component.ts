import { Component } from '@angular/core';
import { MonsterListComponent } from '../../../shared/components/monster-list/monster-list.component';

@Component({
  selector: 'app-monsters',
  imports: [MonsterListComponent],
  templateUrl: './monsters.component.html',
  styleUrl: './monsters.component.css'
})
export class MonstersComponent {

}
