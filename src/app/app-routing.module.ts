import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AllServicesComponent } from './pages/all-services/all-services.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { ServicesComponent } from './components/services/services.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';



const routes: Routes = [
  {
    path: "",
    component: HomeComponent 
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "register", 
    component: RegisterComponent
  },
  {
    path: "login", 
    component: LoginComponent
  },
  {
    path: "all-service",
    component: AllServicesComponent
  },
  {
    path: "civilStatus",
    component: ServicePageComponent
  },
  {
    path: "services",
    component: ServicesComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
