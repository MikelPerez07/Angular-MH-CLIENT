import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NoImageDirective } from '../../directives/no-image.directive';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NoImageDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  weaponTypes: string[] = ['Great-sword', 'Sword and shield', 'Long sword', 'Dual blades', 'Switch axe', 'Charge blade', 'Insect glaive', 'Hammer', 'Hunting horn', 'Bow', 'Ligth bow gun', 'Heavy bow gun']

  @Output() output: EventEmitter<boolean> = new EventEmitter<boolean>();
  nav: boolean = false;

  navClick(): void {
    console.log("nav " + this.nav);
    this.nav = !this.nav;
    this.output.emit(this.nav);
  }
}
