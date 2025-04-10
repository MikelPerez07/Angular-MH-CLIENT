import { Component, Input, OnInit } from '@angular/core';
import { Element } from '../../../core/models/entities';

@Component({
  selector: 'app-element-icon',
  imports: [],
  templateUrl: './element-icon.component.html',
  styleUrl: './element-icon.component.css'
})
export class ElementIconComponent implements OnInit {
  ngOnInit(): void {
    console.log("elemento " + this.element);
  }

  elements: string[] = ["fire", "water", "thunder", "ice", "dragon", "poison", "sleep", "paralysis", "blastblight"]
  @Input() element: number;



}
