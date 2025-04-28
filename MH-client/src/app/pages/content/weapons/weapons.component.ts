import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { WeaponService } from '../../../core/services/weapon.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Weapon, WeaponType, MotionValue, WeaponSharpness, Element, Skill, Rank, WeaponSlot } from '../../../core/models/entities';
import { Subscription } from 'rxjs';
import { WeaponCardComponent } from '../../../shared/components/weapon-card/weapon-card.component';
import { NgClass } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-weapons',
  imports: [WeaponCardComponent, NgClass, MatTooltipModule],
  templateUrl: './weapons.component.html',
  styleUrl: './weapons.component.css'
})
export class WeaponsComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this._suscripcion.unsubscribe();
    this._routerSubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.getData();

    this._routerSubscription = this._route.params.subscribe(params => {
      this.weaponType = params['weaponType'];
      this.getData(); // Método que recarga los datos
    });


  }

  private _weaponsService: WeaponService = inject(WeaponService);
  private _router: Router = inject(Router);
  private _suscripcion: Subscription;
  private _routerSubscription: Subscription;
  private _route: ActivatedRoute = inject(ActivatedRoute);


  weapons: Weapon[] = [];
  weaponsFiltered: Weapon[] = [];
  weaponType: string;
  actualWeapon: number = 0;


  ///////////////////////////
  //Ej. data //

  motionValues: MotionValue[] = [
    { id: 1, name: 'Sword', stun: 10, exhaust: 20, hits: '5' },
    { id: 2, name: 'Axe', stun: 15, exhaust: 25, hits: '6' },
    { id: 3, name: 'Hammer', stun: 20, exhaust: 30, hits: '7' },
    { id: 4, name: 'Lance', stun: 25, exhaust: 35, hits: '8' },
    { id: 5, name: 'Gunlance', stun: 30, exhaust: 40, hits: '9' },
    { id: 6, name: 'Switch Axe', stun: 35, exhaust: 45, hits: '10' },
    { id: 7, name: 'Charge Blade', stun: 40, exhaust: 50, hits: '11' },
    { id: 8, name: 'Insect Glaive', stun: 45, exhaust: 55, hits: '12' },
    { id: 9, name: 'Bow', stun: 50, exhaust: 60, hits: '13' },
    { id: 10, name: 'Light Bowgun', stun: 55, exhaust: 65, hits: '14' },
    { id: 11, name: 'Heavy Bowgun', stun: 60, exhaust: 70, hits: '15' }]

  weaponTypes: WeaponType[] = [
    { id: 1, damageType: { id: 1, damageType: 'Slash' }, type: 'long sword', motionValue: this.motionValues },
    { id: 2, damageType: { id: 2, damageType: 'Blunt' }, type: 'Axe', motionValue: this.motionValues },
    { id: 3, damageType: { id: 3, damageType: 'Blunt' }, type: 'Hammer', motionValue: this.motionValues },
    { id: 4, damageType: { id: 4, damageType: 'Pierce' }, type: 'Lance', motionValue: this.motionValues },
    { id: 5, damageType: { id: 5, damageType: 'Pierce' }, type: 'Gunlance', motionValue: this.motionValues },
    { id: 6, damageType: { id: 6, damageType: 'Slash' }, type: 'Switch Axe', motionValue: this.motionValues },
    { id: 7, damageType: { id: 7, damageType: 'Slash' }, type: 'Charge Blade', motionValue: this.motionValues },
    { id: 8, damageType: { id: 8, damageType: 'Slash' }, type: 'Insect Glaive', motionValue: this.motionValues },
    { id: 9, damageType: { id: 9, damageType: 'Pierce' }, type: 'Bow', motionValue: this.motionValues },
    { id: 10, damageType: { id: 10, damageType: 'Pierce' }, type: 'Light Bowgun', motionValue: this.motionValues },]


  sharpnesses: WeaponSharpness[] = [
    { id: 1, sharpnessLevel: 1, red: 10, orange: 20, green: 30, blue: 40, white: 50, purple: 60 },
    { id: 2, sharpnessLevel: 2, red: 10, orange: 20, green: 30, blue: 40, white: 50, purple: 65 },
    { id: 3, sharpnessLevel: 3, red: 10, orange: 20, green: 30, blue: 40, white: 50, purple: 70 },
    { id: 4, sharpnessLevel: 4, red: 10, orange: 20, green: 30, blue: 40, white: 50, purple: 75 },
    { id: 5, sharpnessLevel: 5, red: 10, orange: 20, green: 30, blue: 40, white: 50, purple: 80 },
  ]


  element: Element = { id: 1, element: 'water' };

  skills: Rank[] = [{
    id: 1, level: 3, description: "", skill: {
      id: 2, description: "", name: ""
    }
  }]

  slots: WeaponSlot = { id: 1, slot1: 1, slot2: 0, slot3: 0 };

  ///////////////////////

  getData(): void {

    this._suscripcion = this._route.params.subscribe({
      next: (params) => {
        console.log(params);

        this.weaponType = params['weaponType'];
      },
      error: () => {
        this._router.navigate(['/error']);
      },
      complete: () => { }
    });


    this._weaponsService.getAllWeapons().subscribe({
      next: (data) => {
        console.log("weapon data")
        this.weapons = data;
        console.log(this.weapons);
        this.filterWeaponsByType(0);

      },
      error: (error) => {
        console.log(error);
        //this._router.navigate(['/error']);
        // this.putWeaponDataExample();

      },
      complete: () => {

      }

    })
  }

  putWeaponDataExample(): void {

    this.weapons = [
      {
        id: 1,
        name: 'Long-sword',
        type: this.weaponTypes[0],
        rarity: 5,
        rawAttack: 100,
        displayAttack: 120,
        affinity: 5,
        sharpnesses: this.sharpnesses,
        craftable: 1,
        upgradeMaterials: [],
        craftingMaterials: [],
        elementalDamage: 100,
        element: this.element,
        elementHidden: 0,
        skills: this.skills,
        slots: this.slots,
      }
    ];
    console.log(this.weapons[0]);
  }


  filterWeaponsByType(type: number) {
    this.actualWeapon = type;
    this.weaponsFiltered = this.weapons.filter(v => {
      return v.type.id === this.actualWeapon;
    });
    console.log(this.weaponsFiltered);
    console.log(this.weapons);
  }
}
