
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { SigninWithImgComponent } from './signin-with-img/signin-with-img.component';
import { SignupComponent } from './signup/signup.component';
import { ServicesThreeColumnComponent } from './services-three-column/services-three-column.component';
import { TeamThreeColumnComponent } from './team-three-column/team-three-column.component';
import { PortfolioSixGridComponent } from './portfolio-six-grid/portfolio-six-grid.component';
import { CardComponent } from './card/card.component';
import { LoginComponent } from './login/login.component';
import { SignupWithImgComponent } from './signup-with-img/signup-with-img.component';
import { SimpleRightHeaderComponent } from './simple-right-header/simple-right-header.component';
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
import { FormVerticalComponent } from './form-vertical/form-vertical.component';
import { FormVerticalWithIconComponent } from './form-vertical-with-icon/form-vertical-with-icon.component';
import { FormHorizontalComponent } from './form-horizontal/form-horizontal.component';
import { FormHorizontalWithIconComponent } from './form-horizontal-with-icon/form-horizontal-with-icon.component';

const routes: Routes = [
  { path: 'signin', component: SigninWithImgComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'servicesthree', component: ServicesThreeColumnComponent },
  { path: 'portfoliosi', component: PortfolioSixGridComponent },
  { path: 'teamthree', component: TeamThreeColumnComponent},
  { path: 'card', component: CardComponent},
  { path: 'login', component: LoginComponent },
  { path: 'Signimg', component: SignupWithImgComponent },
  { path: 'simpleheader', component: SimpleRightHeaderComponent},
  { path: 'cardfour', component:  CardFourGridsComponent},
  { path: 'table', component:  TableComponent},
  { path: 'tabletag', component:  TableWithTagsComponent},
  { path: 'tableprogressbar', component:  TableWithProgressbarComponent },
  { path: 'invoice', component:  InvoiceComponent},
  { path: 'transaction', component:  TransactionComponent },
  { path: 'profile', component:  ProfileComponent},
  { path: 'variants', component:  CardThreeVariantsComponent},
  { path: 'imgvariant', component:  CardImageVariantsComponent},
  { path: 'cardhorizontal', component:  CardHorizontalComponent},
  { path: 'colorvariants', component:  CardColourVariantsComponent },
  { path: 'cardmasonry', component:  CardMasonryComponent},
  { path: 'fvertical', component:  FormVerticalComponent},
  { path: 'horiz', component:  FormHorizontalComponent},
  { path: 'horizicon', component:  FormHorizontalWithIconComponent},


];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }