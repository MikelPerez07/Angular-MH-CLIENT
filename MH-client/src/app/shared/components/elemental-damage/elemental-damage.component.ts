import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-elemental-damage',
  imports: [CommonModule],
  templateUrl: './elemental-damage.component.html',
  styleUrl: './elemental-damage.component.css'
})
export class ElementalDamageComponent {

  @Input() element?: number;
  @Input() elementDamage?: number;
  @Input() elementHidden?: number;
}
