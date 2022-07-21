import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductGalleryComponent } from './product-gallery/product-gallery.component';
import { AskJennieComponent } from './ask-jennie/ask-jennie.component';
import { CardComponent } from './card/card.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SignupWithImgComponent } from './signup-with-img/signup-with-img.component';
import { SigninWithImgComponent } from './signin-with-img/signin-with-img.component';
import { SimpleRightHeaderComponent } from './simple-right-header/simple-right-header.component';
import { SimpleCenterHeaderComponent } from './simple-center-header/simple-center-header.component';
import { HeaderWithRightbuttonComponent } from './header-with-rightbutton/header-with-rightbutton.component';
import { HeaderButtonWithSearchComponent } from './header-button-with-search/header-button-with-search.component';
import { HeaderSearchWithProfileComponent } from './header-search-with-profile/header-search-with-profile.component';
import { HeaderSearchWithDropdownprofileComponent } from './header-search-with-dropdownprofile/header-search-with-dropdownprofile.component';
import { DoubleheaderComponent } from './doubleheader/doubleheader.component';
import { HeaderTopnavWithHeaderComponent } from './header-topnav-with-header/header-topnav-with-header.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductGalleryComponent,
    AskJennieComponent,
    CardComponent,
    LoginComponent,
    SignupComponent,
    SignupWithImgComponent,
    SigninWithImgComponent,
    SimpleRightHeaderComponent,
    SimpleCenterHeaderComponent,
    HeaderWithRightbuttonComponent,
    HeaderButtonWithSearchComponent,
    HeaderSearchWithProfileComponent,
    HeaderSearchWithDropdownprofileComponent,
    DoubleheaderComponent,
    HeaderTopnavWithHeaderComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }