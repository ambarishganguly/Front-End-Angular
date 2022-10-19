import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Components/UserSection/homepage/homepage.component';
import { LoginComponent } from './Components/UserSection/login/login.component';
import { RegistrationComponent } from './Components/UserSection/registration/registration.component';
import { CropComponent } from './Components/UserSection/crop/crop.component';
import { SigninComponent } from './Components/AdminSection/signin/signin.component';
import { CroponsaleComponent } from './Components/UserSection/croponsale/croponsale.component';
import { AuthGuard } from 'src/gaurd/auth-guard.service';
import { AddCroponsaleComponent } from './Components/UserSection/add-croponsale/add-croponsale.component';
import { AddcropComponent } from './Components/AdminSection/addcrop/addcrop.component';
import { DealerviewComponent } from './Components/DealerSection/dealerview/dealerview.component';

const routes: Routes = [
  {path:'', component :HomepageComponent },
  {path:'login', component :LoginComponent },
  {path:'registration', component:RegistrationComponent},
  {path:'crop', component:CropComponent,canActivate:[AuthGuard]},
  {path:'create',component:AddcropComponent,canActivate:[AuthGuard]},
  {path:'this', component:SigninComponent},
  {path:'onSale',component:CroponsaleComponent,canActivate:[AuthGuard]},
  {path:'addonsale',component:AddCroponsaleComponent,canActivate:[AuthGuard]},
  {path:'viewcrops',component:DealerviewComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
