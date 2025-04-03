import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { WeaponsComponent } from "./weapons/weapons.component";


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

    }

];