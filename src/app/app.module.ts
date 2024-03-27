import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavBarComponent } from './shared/mainComponent/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/mainComponent/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AllServicesComponent } from './pages/all-services/all-services.component';
import { SearchBarComponent } from './shared/mainComponent/search-bar/search-bar.component';
import { ServicesComponent } from './components/services/services.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { CivilStatusOptionsComponent } from './components/civil-status-options/civil-status-options.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/dashboard/dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    AllServicesComponent,
    SearchBarComponent,
    ServicesComponent,
    ServicePageComponent,
    CivilStatusOptionsComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
