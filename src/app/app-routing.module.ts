import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RecoveryPasswordComponent } from './auth/login/form/recovery-password/recovery-password.component';
import { NeedHelpComponent } from './auth/login/form/need-help/need-help.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'prefix'},
  {path: 'login', component: LoginComponent},
  {path: 'recovery', component: RecoveryPasswordComponent},
  {path: 'help', component: NeedHelpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
