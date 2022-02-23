import { AddNewPlayerComponent } from './add-new-player/add-new-player.component';
import { ListingPlayerComponent } from './listing-player/listing-player.component';
import { PlayersComponent } from './players/players.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { component: HomeComponent, path: '' },
  {component:HomeComponent,path:'home'},
  { component: LoginComponent, path: 'login' },
  { component: RegisterComponent, path: 'register' },
  // { component: ListingPlayerComponent, path: 'list' },
  {
    component: PlayersComponent, path: 'player', children: [
      { component: ListingPlayerComponent, path: '' },
      { component: AddNewPlayerComponent, path: 'create' },
      { component: AddNewPlayerComponent, path: 'edit/:id' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
