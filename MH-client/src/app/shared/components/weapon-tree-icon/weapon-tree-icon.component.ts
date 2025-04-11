import { Component, ElementRef, inject, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Weapon } from '../../../core/models/entities';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-weapon-tree-icon',
  imports: [MatTooltipModule],
  templateUrl: './weapon-tree-icon.component.html',
  styleUrl: './weapon-tree-icon.component.css'
})
export class WeaponTreeIconComponent implements OnInit {
  ngOnInit(): void {
    this.weaponType = this.weapon.type.id! - 1;
  }

  @Input() weapon: Weapon;
  weaponType: number;
  @ViewChild("iconContainer") iconContainer: ElementRef = inject(ElementRef);
  private renderer2: Renderer2 = inject(Renderer2);


  expand(): void {
    //TODO 
    this.renderer2.addClass(this.iconContainer, "active");
  }

}
