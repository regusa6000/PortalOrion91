/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import { NbAuthJWTToken, NbAuthModule, NbAuthSimpleToken, NbPasswordAuthStrategy } from '@nebular/auth';
import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    NbAuthModule.forRoot({
      strategies:[
        NbPasswordAuthStrategy.setup({
          name: 'email',
          token:{
            class: NbAuthSimpleToken,
            key: 'token'
          },
          baseEndpoint: 'http://vpnxer.grupohidalgos.com:8070',
          login: {
            endpoint: '/login',
            method: 'post',
            redirect: {
              success: '/pages/extra-components/alertas-orion',
              failure: null,
            }

          },

        },
        )
      ]
    })
  ],

  providers: [
    // { provide: LOCALE_ID, useValue: 'es-BR' },
    NbDatepickerModule,
    {provide : LocationStrategy , useClass: HashLocationStrategy}
    ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
