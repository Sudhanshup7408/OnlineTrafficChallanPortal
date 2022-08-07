import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PoliceLoginComponent } from './components/police-login/police-login.component';
import { VehicleOwnerLoginComponent } from './components/vehicle-owner-login/vehicle-owner-login.component';
import { PoliceHomePageComponent } from './components/police-home-page/police-home-page.component';
import { VehicleOwnerHomePageComponent } from './components/vehicle-owner-home-page/vehicle-owner-home-page.component';
import { FormsModule } from '@angular/forms';
import { map } from 'rxjs';
import { GenerateChallanComponent } from './components/generate-challan/generate-challan.component';
import { ViewChallanComponent } from './components/view-challan/view-challan.component';
import { VoilationReportComponent } from './components/voilation-report/voilation-report.component';
import { DisputeChallanComponent } from './components/dispute-challan/dispute-challan.component';
import { ViewChallansComponent } from './components/view-challans/view-challans.component';
import { PaymentComponent } from './components/payment/payment.component';
import { GuidelinesComponent } from './components/guidelines/guidelines.component';
import { DisputeFormComponent } from './components/dispute-form/dispute-form.component';
import { VoilationRulesComponent } from './components/voilation-rules/voilation-rules.component';
import { PaidChallanComponent } from './components/paid-challan/paid-challan.component';
import { OwnerFormComponent } from './components/owner-form/owner-form.component';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PoliceLoginComponent,
    VehicleOwnerLoginComponent,
    PoliceHomePageComponent,
    VehicleOwnerHomePageComponent,
    GenerateChallanComponent,
    ViewChallanComponent,
    VoilationReportComponent,
    DisputeChallanComponent,
    ViewChallansComponent,
    PaymentComponent,
    GuidelinesComponent,
    DisputeFormComponent,
    VoilationRulesComponent,
    PaidChallanComponent,
    OwnerFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
