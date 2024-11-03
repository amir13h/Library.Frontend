import { Routes } from '@angular/router';
import { SignupComponent } from './+component/signup/ui/signup.component';
import { LoginComponent } from './+component/login/ui/login/login.component';
import { AdminComponent } from './+component/admin/ui/admin.component';

export const routes: Routes = [
    {path:'signup',component:SignupComponent},
    {path:'login',component:LoginComponent},
    {path:'admin',component:AdminComponent},
    { path: '', redirectTo: 'signup', pathMatch: 'full' }
];
