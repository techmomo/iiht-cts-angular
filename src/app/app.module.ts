import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { CustomErrorHandler } from './CustomErrorHandler';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule
  ],
  providers: [ { provide: ErrorHandler, useClass: CustomErrorHandler }],
  bootstrap: [AppComponent]
})

export class AppModule { }
