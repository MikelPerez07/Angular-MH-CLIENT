import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Weapon } from '../../../core/models/entities';
import { WeaponService } from '../../../core/services/weapon.service';

@Component({
  selector: 'app-details-weapon',
  imports: [],
  templateUrl: './details-weapon.component.html',
  styleUrl: './details-weapon.component.css'
})
export class DetailsWeaponComponent implements OnInit, OnDestroy{
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
      },
      error: () => { },
      complete: () => { }

    })
  }




}
