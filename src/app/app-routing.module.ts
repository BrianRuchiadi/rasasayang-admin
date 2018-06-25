import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthUserGuard } from './guards/auth.user.guard';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthUserGuard]},
  { path: '**', redirectTo: 'home', canActivate: [AuthUserGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
