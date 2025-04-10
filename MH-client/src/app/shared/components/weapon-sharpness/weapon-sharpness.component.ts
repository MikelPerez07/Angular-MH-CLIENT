import { Component, Input, NgModule, OnInit } from '@angular/core';
import { WeaponSharpness } from '../../../core/models/entities';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weapon-sharpness',
  imports: [CommonModule],
  templateUrl: './weapon-sharpness.component.html',
  styleUrl: './weapon-sharpness.component.css'
})
export class WeaponSharpnessComponent implements OnInit {
  ngOnInit(): void {
    this.totalSharpness = this.getTotalSharpness(this.sharpnesses[this.sharpnesses.length - 1]);
    this.sRed = this.getSharpnessPercent(this.totalSharpness, this.sharpnesses[0]?.red) + "%";
    this.sOrange = this.getSharpnessPercent(this.totalSharpness, this.sharpnesses[0]?.orange) + "%";
    this.sGreen = this.getSharpnessPercent(this.totalSharpness, this.sharpnesses[0]?.green) + "%";
    this.sBlue = this.getSharpnessPercent(this.totalSharpness, this.sharpnesses[0]?.blue) + "%";
    this.sWhite = this.getSharpnessPercent(this.totalSharpness, this.sharpnesses[0]?.white) + "%";
    this.sPurple = this.getSharpnessPercent(this.totalSharpness, this.sharpnesses[0]?.purple) + "%";

    this.sRedFinal = this.getSharpnessPercent(this.totalSharpness, this.sharpnesses[this.sharpnesses.length - 1]?.red) + "%";
    this.sOrangeFinal = this.getSharpnessPercent(this.totalSharpness, this.sharpnesses[this.sharpnesses.length - 1]?.orange) + "%";
    this.sGreenFinal = this.getSharpnessPercent(this.totalSharpness, this.sharpnesses[this.sharpnesses.length - 1]?.green) + "%";
    this.sBlueFinal = this.getSharpnessPercent(this.totalSharpness, this.sharpnesses[this.sharpnesses.length - 1]?.blue) + "%";
    this.sWhiteFinal = this.getSharpnessPercent(this.totalSharpness, this.sharpnesses[this.sharpnesses.length - 1]?.white) + "%";
    this.sPurpleFinal = this.getSharpnessPercent(this.totalSharpness, this.sharpnesses[this.sharpnesses.length - 1]?.purple) + "%";

    console.log(this.sharpnesses)
  }

  @Input() sharpnesses: WeaponSharpness[] = [];

  totalSharpness: number;
  sRed: string;
  sOrange: string;
  sGreen: string;
  sBlue: string;
  sWhite: string;
  sPurple: string;

  sRedFinal: string;
  sOrangeFinal: string;
  sGreenFinal: string;
  sBlueFinal: string;
  sWhiteFinal: string;
  sPurpleFinal: string;


  getTotalSharpness(sharpness: WeaponSharpness): number {
    console.log("sharpness" + sharpness?.red);
    return sharpness?.red + sharpness?.orange + sharpness?.green + sharpness?.blue + sharpness?.white + sharpness?.purple;

  }

  getSharpnessPercent(totalSharpness: number, sharpnessNumber: number): number {
    return sharpnessNumber * 100 / totalSharpness;
  }

}
