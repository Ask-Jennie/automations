import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { SigninWithImgComponent } from './signin-with-img/signin-with-img.component';
import { SignupComponent } from './signup/signup.component';
import { ServicesThreeColumnComponent } from './services-three-column/services-three-column.component';
import { TeamThreeColumnComponent } from './team-three-column/team-three-column.component';
import { PortfolioSixGridComponent } from './portfolio-six-grid/portfolio-six-grid.component';
const routes: Routes = [
  { path: 'signin', component: SigninWithImgComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'servicesthree', component: ServicesThreeColumnComponent },
  { path: 'portfoliosi', component: PortfolioSixGridComponent },
  { path: 'teamthree', component: TeamThreeColumnComponent},
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }