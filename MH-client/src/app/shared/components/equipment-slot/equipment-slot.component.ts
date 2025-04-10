import { Component, Input } from '@angular/core';
import { WeaponSlot } from '../../../core/models/entities';

@Component({
  selector: 'app-equipment-slot',
  imports: [],
  templateUrl: './equipment-slot.component.html',
  styleUrl: './equipment-slot.component.css'
})
export class EquipmentSlotComponent {

  @Input() slot: WeaponSlot;


  getSlotValue(n: number): string {

    if (n === 0) {
      if (this.slot.slot1 === 0) { return "-" }
      return this.slot.slot1.toString();
    } else if (n === 1) {
      if (this.slot.slot2 === 0) { return "-" }
      return this.slot.slot2.toString();
    } else if (n === 2) {
      if (this.slot.slot3 === 0) { return "-" }
      return this.slot.slot3.toString();
    }
    return "";
  }
}
