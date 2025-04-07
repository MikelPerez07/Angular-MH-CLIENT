import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { WeaponsComponent } from "./weapons/weapons.component";
import { DetailsWeaponComponent } from "./details-weapon/details-weapon.component";


export const CONTENT_ROUTES: Routes = [

    {
        path: '',
        component: HomeComponent

    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'weapons/:weaponType',
        component: WeaponsComponent

    },

    {
        path: 'weapons',
        component: WeaponsComponent

    },
    {
        path: 'weapon-data/:id',
        component: DetailsWeaponComponent

    }
];