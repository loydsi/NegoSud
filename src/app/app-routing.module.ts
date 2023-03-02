import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './component/contact/contact.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './component/login/login.component';
import { UserBasketComponent } from './component/user-basket/user-basket.component';
import { UserFormComponent } from './component/user-form/user-form.component';
import { WineCardComponent } from './component/wine-card/wine-card.component';
import { WineListComponent } from './component/wine-list/wine-list.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'connexion',
    component:LoginComponent
  },
  {
    path:'inscription',
    component:UserFormComponent
  },
  {
    path:'wine-list',
    component:WineListComponent,
    
  },
  {
    path:'panier',
    component:UserBasketComponent
  },
  {
    path:'wine-detail/:id',
    component:WineCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
