import { CommonModule, registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/fr';
import localeDeExtra from '@angular/common/locales/extra/fr';
import {
  LOCALE_ID,
  NgModule
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { PopupComponent } from './popup/popup.component';

registerLocaleData(localeDe, 'fr-FR', localeDeExtra);

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomepageComponent,
    CartComponent,
    ProfileComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'fr-FR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
