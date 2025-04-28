import { Component, Input } from '@angular/core';
import { RarityPipe } from "../../pipes/rarity.pipe";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-rarity',
  imports: [RarityPipe, NgClass],
  templateUrl: './rarity.component.html',
  styleUrl: './rarity.component.css'
})
export class RarityComponent {

  @Input() rarity: number;

}
