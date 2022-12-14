import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(
    {path: }
  ) ],
  declarations: [ AppComponent, HelloComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
