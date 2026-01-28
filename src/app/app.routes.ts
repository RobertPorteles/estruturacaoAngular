import { Routes } from '@angular/router';
import { Login } from './components/pages/login/login';
import { CriarUsuario } from './components/pages/criar-usuario/criar-usuario';
import { Dashboard } from './components/pages/dashboard/dashboard';
import { Agenda } from './services/agenda';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    {
        path : 'login', component: Login
    },
    {
        path : 'criar-usuario', component: CriarUsuario
    },
    {
        path : 'dashboard', component : Dashboard
    },
    {
        path : 'agenda', component : Agenda, canActivate: [authGuard]
    },
    {
        path : '', pathMatch : 'full', redirectTo : '/login'
    }
];
