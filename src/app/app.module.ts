import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import HttpClientModule to use the API
// Remember to add it to @NgModule imports : too
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
