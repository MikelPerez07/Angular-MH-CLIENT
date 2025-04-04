import { Component, Input } from '@angular/core';
import { WeaponSharpness } from '../../../core/models/entities';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-weapon-sharpness',
  imports: [NgStyle],
  templateUrl: './weapon-sharpness.component.html',
  styleUrl: './weapon-sharpness.component.css'
})
export class WeaponSharpnessComponent {

  @Input() sharpnesses: WeaponSharpness[] = [];
  totalSharpness: number = this.getTotalSharpness(this.sharpnesses[0]);
  sRed: string = this.getSharpnessPercent(this.totalSharpness, this.sharpnesses[0].red) + "%";
  sOrange: string = this.getSharpnessPercent(this.totalSharpness, this.sharpnesses[0].orange) + "%";
  sGreen: string = this.getSharpnessPercent(this.totalSharpness, this.sharpnesses[0].green) + "%";
  sBlue: string = this.getSharpnessPercent(this.totalSharpness, this.sharpnesses[0].blue) + "%";
  sWhite: string = this.getSharpnessPercent(this.totalSharpness, this.sharpnesses[0].white) + "%";
  sPurple: string = this.getSharpnessPercent(this.totalSharpness, this.sharpnesses[0].purple) + "%";


  getTotalSharpness(sharpness: WeaponSharpness): number {
    return sharpness.red + sharpness.orange + sharpness.green + sharpness.blue + sharpness.white + sharpness.purple;

  }

  getSharpnessPercent(totalSharpness: number, sharpnessNumber: number): number {
    return sharpnessNumber * 100 / totalSharpness;
  }

}
