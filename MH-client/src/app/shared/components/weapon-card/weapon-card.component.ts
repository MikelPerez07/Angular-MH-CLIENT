import { Component, Input } from '@angular/core';
import { Weapon } from '../../../core/models/entities';
import { NoImageDirective } from '../../directives/no-image.directive';
import { RarityPipe } from '../../pipes/rarity.pipe';
import { NgClass, NgStyle } from '@angular/common';
import { WeaponSharpnessComponent } from '../weapon-sharpness/weapon-sharpness.component';
import { ElementIconComponent } from '../element-icon/element-icon.component';
import { RouterLink } from '@angular/router';
import { EquipmentSlotComponent } from '../equipment-slot/equipment-slot.component';
import { RarityComponent } from "../rarity/rarity.component";

@Component({
  selector: 'app-weapon-card',
  imports: [NoImageDirective, RarityPipe, NgClass, NgStyle, WeaponSharpnessComponent, ElementIconComponent, RouterLink, EquipmentSlotComponent, RarityComponent],
  templateUrl: './weapon-card.component.html',
  styleUrl: './weapon-card.component.css'
})
export class WeaponCardComponent {

  @Input() weaponData: Weapon;




}
