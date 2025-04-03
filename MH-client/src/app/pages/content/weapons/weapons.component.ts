import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { WeaponService } from '../../../core/services/weapon.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Weapon } from '../../../core/models/entities';
import { Subscription } from 'rxjs';
import { WeaponCardComponent } from '../../../shared/components/weapon-card/weapon-card.component';

@Component({
  selector: 'app-weapons',
  imports: [WeaponCardComponent],
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
  weaponType: string;


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


    this._weaponsService.getWeaponByType(this.weaponType).subscribe({
      next: (data) => {
        this.weapons = data;
        console.log(this.weapons);
      },
      error: (error) => {
        console.log(error);
        this._router.navigate(['/error']);
      },
      complete: () => {

      }

    })
  }

}
