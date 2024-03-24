import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Parent01Component } from './parent01/parent01.component';
import { Child01Component } from './child01/child01.component';
import { Child02Component } from './child02/child02.component';
import { Parent02Component } from './parent02/parent02.component';
import { Child03Component } from './child03/child03.component';
import { Parent03Component } from './parent03/parent03.component';


@NgModule({
  declarations: [
    AppComponent,
    Parent01Component,
    Child01Component,
    Child02Component,
    Parent02Component,
    Child03Component,
    Parent03Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
