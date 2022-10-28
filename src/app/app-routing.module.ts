import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { GloginComponent } from './glogin/glogin.component';
import { GuideComponent } from './guide/guide.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './services/auth.gaurd';
import { SignupComponent } from './signup/signup.component';
import { SignupsuccessComponent } from './signupsuccess/signupsuccess.component';

const routes: Routes = [
  { path: 'signup-success', component: SignupsuccessComponent},
  { path: 'automation', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'feedback', component: FeedbackComponent, canActivate: [AuthGuard] },
  { path: 'guide', component:GuideComponent, canActivate: [AuthGuard] },
  { path: '',   redirectTo: '/automation', pathMatch: 'full' },
  { path: 'login',   component: LoginComponent },
  { path: '2',   component: GloginComponent },
  { path: 'signup',   component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
