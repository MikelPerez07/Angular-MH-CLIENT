import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MotionValue, Weapon } from '../../../core/models/entities';
import { WeaponService } from '../../../core/services/weapon.service';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { NoImageDirective } from '../../../shared/directives/no-image.directive';
import { WeaponCardComponent } from '../../../shared/components/weapon-card/weapon-card.component';
import { WeaponTreeIconComponent } from '../../../shared/components/weapon-tree-icon/weapon-tree-icon.component';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-details-weapon',
  imports: [MatTabsModule, MatTableModule, NoImageDirective, WeaponTreeIconComponent, NgClass, NgStyle],
  templateUrl: './details-weapon.component.html',
  styleUrl: './details-weapon.component.css'
})
export class DetailsWeaponComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    this.getData();
  }

  private _router: Router = inject(Router);
  private _route: ActivatedRoute = inject(ActivatedRoute);
  private _weaponService: WeaponService = inject(WeaponService);


  subscription: Subscription;
  weapon: Weapon;
  id: number;


  displayedColumns: string[] = ['name', 'hits', 'stun', 'exhaust'];
  dataSource: MotionValue[] = [];

  previousWeapons: Weapon[] = [];
  previousActualWeapon?: Weapon;
  indexedWeapons: { weapon: Weapon, index: number }[] = [];





  getData(): void {
    this.subscription = this._route.params.subscribe({
      next: (params) => {
        this.id = params['id'];
      },
      error: () => {
        this._router.navigate(['/error']);
      },
      complete: () => {
        //TODO control Data loading

      }
    });


    this._weaponService.getWeaponById(this.id).subscribe({
      next: (data) => {
        this.weapon = data;
        this.dataSource = this.weapon.type.motionValue.sort((a, b) => a.id! - b.id!);
        this.getPreviousWeapons(this.weapon);
        console.log(this.weapon);

      },
      error: () => { },
      complete: () => { }

    })


  }

  getPreviousWeapons(weapon: Weapon): void {
    let final: boolean = false;
    this.previousActualWeapon = weapon;
    while (!final) {
      this.previousWeapons.push(this.previousActualWeapon!);

      if (this.previousActualWeapon?.previous == undefined || this.previousActualWeapon.previous == null) {
        final = true;
        this.previousWeapons.reverse();
        this.indexedWeapons = this.previousWeapons.map((weapon, index) => ({ weapon, index }));
        console.log(weapon.crafting);
        break;
      }
      this.previousActualWeapon = this.previousActualWeapon.previous;
    }
  }


  calculateMargin(n: number): string {
    return `${n * 56}px`; // Multiply the variable by 10px
  }




}
