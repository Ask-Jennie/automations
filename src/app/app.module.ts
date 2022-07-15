import { BrowserModule } from '@angular/platform-browser';
import { AuthGuard } from './services/auth.gaurd';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { GuideComponent } from './guide/guide.component';
import { MarkdownModule } from 'ngx-markdown';
import { SignupWithImgComponent } from './ui-lib/signup-with-img/signup-with-img.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { SigninWithImgComponent } from './ui-lib/signin-with-img/signin-with-img.component';
import { ShowErrorToastComponent } from './ui-lib/show-error-toast/show-error-toast.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    FeedbackComponent,
    GuideComponent,
    SignupWithImgComponent,
    LoginComponent,
    SignupComponent,
    SigninWithImgComponent,
    ShowErrorToastComponent
  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  providers: [
    AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
