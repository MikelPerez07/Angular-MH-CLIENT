import { Component, Input } from '@angular/core';
import { Weapon } from '../../../core/models/entities';
import { RarityComponent } from "../rarity/rarity.component";
import { NoImageDirective } from '../../directives/no-image.directive';
import { EquipmentSlotComponent } from '../equipment-slot/equipment-slot.component';
import { AffinityComponent } from '../affinity/affinity.component';
import { ElementalDamageComponent } from '../elemental-damage/elemental-damage.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-weapon-information',
  imports: [RarityComponent, NoImageDirective,EquipmentSlotComponent,AffinityComponent,ElementalDamageComponent,RouterLink],
  templateUrl: './weapon-information.component.html',
  styleUrl: './weapon-information.component.css'
})
export class WeaponInformationComponent {


  @Input() weapon: Weapon;



}
