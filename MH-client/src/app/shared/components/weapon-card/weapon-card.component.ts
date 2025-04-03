import { Component, Input } from '@angular/core';
import { Weapon } from '../../../core/models/entities';
import { NoImageDirective } from '../../directives/no-image.directive';

@Component({
  selector: 'app-weapon-card',
  imports: [NoImageDirective],
  templateUrl: './weapon-card.component.html',
  styleUrl: './weapon-card.component.css'
})
export class WeaponCardComponent {

  @Input() weaponData : Weapon;


}
