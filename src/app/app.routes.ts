import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        redirectTo : "home",
        pathMatch : 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./home/home').then(resp => resp.Home)
    },
    {
        path: 'details',
        loadComponent: () => import('./details/details').then(resp => resp.Details)
    },
    {
        path: 'menu',
        loadComponent: () => import('./menu/menu').then(resp => resp.Menu)
    },
    {
        path: 'login',
        loadComponent: () => import('./login/login').then(resp => resp.Login)
    },
    {
        path: "**"
        , loadComponent: () => import('./error/error').then(resp => resp.Error)
    },
];
