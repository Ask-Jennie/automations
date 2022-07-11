import { BrowserModule } from '@angular/platform-browser';
import { AuthGuard } from './services/auth.gaurd';
import { HttpClientModule } from '@angular/common/http';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    FeedbackComponent,
    GuideComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  providers: [
    AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
