import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  weaponTypes: string[] = ['Great-sword', 'Sword and shield', 'Long sword', 'Dual blades', 'Switch axe', 'Charge blade', 'Insect glaive', 'Hammer', 'Hunting horn', 'Bow', 'Ligth bow gun', 'Heavy bow gun']



}
