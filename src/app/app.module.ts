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
import { GroupListComponent } from './group-list/group-list.component';
import { ServicesThreeColumnComponent } from './services-three-column/services-three-column.component';
import { PortfolioSixGridComponent } from './portfolio-six-grid/portfolio-six-grid.component';
import { TeamThreeColumnComponent } from './team-three-column/team-three-column.component';
import { CardFourGridsComponent } from './card-four-grids/card-four-grids.component';
import { TableComponent } from './table/table.component';
import { TableWithTagsComponent } from './table-with-tags/table-with-tags.component';
import { TableWithProgressbarComponent } from './table-with-progressbar/table-with-progressbar.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ProfileComponent } from './profile/profile.component';
import { CardThreeVariantsComponent } from './card-three-variants/card-three-variants.component';
import { CardImageVariantsComponent } from './card-image-variants/card-image-variants.component';
import { CardHorizontalComponent } from './card-horizontal/card-horizontal.component';
import { CardColourVariantsComponent } from './card-colour-variants/card-colour-variants.component';
import { CardMasonryComponent } from './card-masonry/card-masonry.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormVerticalComponent } from './form-vertical/form-vertical.component';
import { FormVerticalWithIconComponent } from './form-vertical-with-icon/form-vertical-with-icon.component';
import { FormHorizontalComponent } from './form-horizontal/form-horizontal.component';
import { FormHorizontalWithIconComponent } from './form-horizontal-with-icon/form-horizontal-with-icon.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { OtpComponent } from './otp/otp.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';
import { MegaMenuSidebarComponent } from './mega-menu-sidebar/mega-menu-sidebar.component';
import { SidebarShowHideComponent } from './sidebar-show-hide/sidebar-show-hide.component';
import { SinglePageComponent } from './single-page/single-page.component';
import { ContactUsFormComponent } from './ui-lib/contact-us-form/contact-us-form.component';




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
    GroupListComponent,
    ServicesThreeColumnComponent,
    PortfolioSixGridComponent,
    TeamThreeColumnComponent,
    CardFourGridsComponent,
    TableComponent,
    TableWithTagsComponent,
    TableWithProgressbarComponent,
    InvoiceComponent,
    TransactionComponent,
    ProfileComponent,
    CardThreeVariantsComponent,
    CardImageVariantsComponent,
    CardHorizontalComponent,
    CardColourVariantsComponent,
    CardMasonryComponent,
    FormVerticalComponent,
    FormVerticalWithIconComponent,
    FormHorizontalComponent,
    FormHorizontalWithIconComponent,
    FeedbackComponent,
    ForgetPasswordComponent,
    OtpComponent,
    ChangePasswordComponent,
    ProductCardComponent,
    SidebarNavComponent,
    MegaMenuSidebarComponent,
    SidebarShowHideComponent,
    SinglePageComponent,
    ContactUsFormComponent,
   
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
