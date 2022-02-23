import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PlayersComponent } from './players/players.component';
import { HomeComponent } from './home/home.component';
import { ListingPlayerComponent } from './listing-player/listing-player.component';
import { AddNewPlayerComponent } from './add-new-player/add-new-player.component';

import {HttpClientModule} from '@angular/common/http'
import {ReactiveFormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    PlayersComponent,
    HomeComponent,
    ListingPlayerComponent,
    AddNewPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
