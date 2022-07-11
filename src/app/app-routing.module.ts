import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { GuideComponent } from './guide/guide.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'automation', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'guide', component:GuideComponent},
  { path: '',   redirectTo: '/automation', pathMatch: 'full' },
  { path: 'login',   component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
