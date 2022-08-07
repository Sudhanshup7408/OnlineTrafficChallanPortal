import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PoliceLoginComponent } from './components/police-login/police-login.component';
import { VehicleOwnerLoginComponent } from './components/vehicle-owner-login/vehicle-owner-login.component';
import { PoliceHomePageComponent } from './components/police-home-page/police-home-page.component';
import { VehicleOwnerHomePageComponent } from './components/vehicle-owner-home-page/vehicle-owner-home-page.component';
import { AuthGuard } from './auth.guard';
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

const routes: Routes = [
  {path : '', component : WelcomeComponent},
  {path : 'police', component : PoliceLoginComponent},
  {path : 'owner', component : VehicleOwnerLoginComponent},
  {path : 'policehome',canActivate : [AuthGuard], component : PoliceHomePageComponent},
  {path : 'ownerhome',canActivate : [AuthGuard], component : VehicleOwnerHomePageComponent},
  {path : 'generate', canActivate : [AuthGuard], component : GenerateChallanComponent},
  {path : 'viewbypolice', canActivate : [AuthGuard], component : ViewChallanComponent},
  {path : 'voilation', canActivate : [AuthGuard], component : VoilationReportComponent},
  {path : 'disputedchallan', canActivate : [AuthGuard], component : DisputeChallanComponent},
  {path : 'viewbyowner', canActivate : [AuthGuard], component : ViewChallansComponent},
  {path : 'payment', canActivate : [AuthGuard], component : PaymentComponent},
  {path : 'guidelines', component : GuidelinesComponent},
  {path : 'rules', component : VoilationRulesComponent},
  {path : 'disputeform', canActivate : [AuthGuard], component : DisputeFormComponent},
  {path : 'paidchallan', canActivate : [AuthGuard], component : PaidChallanComponent},
  {path : 'ownerform', canActivate : [AuthGuard], component : OwnerFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
