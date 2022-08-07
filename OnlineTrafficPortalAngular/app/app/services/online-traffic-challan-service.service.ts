import { Injectable } from '@angular/core';
import { Challan } from '../common/challan';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Police } from '../common/police';
import { VehicleOwner } from '../common/vehicle-owner';
import { Voilation } from '../common/voilation';
@Injectable({
  providedIn: 'root'
})
export class OnlineTrafficChallanServiceService {

  challanurl = "http://localhost:8080/api/challan";
  voilationurl = "http://localhost:8080/api/voilation";
  ownerurl = "http://localhost:8080/api/owner";
  constructor(private httpClient : HttpClient) { }

  getAllChallans() : Observable<Challan[]>{
    return this.httpClient.get<getChallanResponse>(this.challanurl).pipe(map(Response=>Response._embedded.challans));
  }

  getAllVoilations() : Observable<Voilation[]> {
    return this.httpClient.get<getVoilationResponse>(this.voilationurl).pipe(map(Response => Response._embedded.voilations));
  }

  getUnpaidChallans() : Observable<Challan[]>{
    const unpaidChallansUrl = "http://localhost:8080/api/challan/search/findByisPaid?ispaid=false";
    return this.httpClient.get<getChallanResponse>(unpaidChallansUrl).pipe(map(Response=>Response._embedded.challans));
  }

  getPaidChallans() : Observable<Challan[]> {
    const paidChallansUrl = "http://localhost:8080/api/challan/search/findByisPaid?ispaid=true";
    return this.httpClient.get<getChallanResponse>(paidChallansUrl).pipe(map(Response=>Response._embedded.challans));
  } 

  getDisputedChallan() : Observable<Challan[]> {
    const disputeChallanUrl = "http://localhost:8080/api/challan/search/findByisDisputed?isDisputed=true";
    return this.httpClient.get<getChallanResponse>(disputeChallanUrl).pipe(map(Response=>Response._embedded.challans));
  }

  getPoliceByEmail(email : string) : Observable<Police> {
    const policeEmailUrl = "http://localhost:8080/api/police/search/findByEmail?email=" + email;
    return this.httpClient.get<Police>(policeEmailUrl);
  }

  getOwnerByEmail(email : string) : Observable<VehicleOwner> {
    const ownerEmailUrl = "http://localhost:8080/api/owner/search/findByEmail?email=" + email;
    return this.httpClient.get<VehicleOwner>(ownerEmailUrl);
  }

  getChallanByPincode(pincode : string) : Observable<Challan[]> {
    const challanByPincodeUrl = "http://localhost:8080/api/challan/search/findByLocation?location=" + pincode;
    return this.httpClient.get<getChallanResponse>(challanByPincodeUrl).pipe(map(Response=>Response._embedded.challans));
  }

  getChallanByVehicleNo(vehicleNo : string) : Observable<Challan[]> {
    const challanByVehicleUrl = "http://localhost:8080/api/challan/search/findByVehicleNo?vehicleNo=" + vehicleNo;
    return this.httpClient.get<getChallanResponse>(challanByVehicleUrl).pipe(map(Response => Response._embedded.challans));
  }

  getChallanById(challanNo : number) : Observable<Challan>{
    return this.httpClient.get<Challan>(this.challanurl + `/${challanNo}`);
  }

  getChallanByPoliceIdAndDisputed(policeId) : Observable<Challan[]> {
    const challanByPoliceIdAndDisputed = "http://localhost:8080/api/challan/search/findByPoliceIdAndIsDisputed?policeId=" + policeId + "&isDisputed=true";
    return this.httpClient.get<getChallanResponse>(challanByPoliceIdAndDisputed).pipe(map(Response => Response._embedded.challans));
  }

  getChallanByPoliceIdAndPaid(policeId) : Observable<Challan[]> {
    const challanByPoliceIdAndPaid = "http://localhost:8080/api/challan/search/findByPoliceIdAndIsPaid?policeId=" + policeId + "&&isPaid=true";
    return this.httpClient.get<getChallanResponse>(challanByPoliceIdAndPaid).pipe(map(Response => Response._embedded.challans));
  }

  getChallanByPoliceId(policeId) : Observable<Challan[]> {
    const challanByPoliceIdUrl = "http://localhost:8080/api/challan/search/findBypoliceId?policeId=" + policeId;
    return this.httpClient.get<getChallanResponse>(challanByPoliceIdUrl).pipe(map(Response => Response._embedded.challans));
  }

  getVoilationById(voilationId : number) : Observable<Voilation> {
    return this.httpClient.get<Voilation>(this.voilationurl + `/${voilationId}`);
  } 

  updateChallan(challan : Challan) : Observable<Challan> {
    const httpOptions = {
      headers : new HttpHeaders ({
        'Content-type' : 'application/json' ,
        'Authorization' : 'auth-token' ,
        'Access-Control-Allow-origin' : "*"
      })
    }
    return this.httpClient.put<Challan>(this.challanurl + `/${challan.challanNo}`, challan, httpOptions);
  }


  SavingChallanDetails(challan) : Observable<Challan> {
    const httpOptions = {
      headers : new HttpHeaders ({
        'Content-type' : 'application/json' ,
        'Authorization' : 'auth-token' ,
        'Access-Control-Allow-origin' : "*"
      })
    }
    return this.httpClient.post<Challan>(this.challanurl,challan,httpOptions);
  }

  SavingOwnerDetails(owner) : Observable<VehicleOwner> {
    const httpOptions = {
      headers : new HttpHeaders ({
        'Content-type' : 'application/json' ,
        'Authorization' : 'auth-token' ,
        'Access-Control-Allow-origin' : "*"
      })
    }
    return this.httpClient.post<VehicleOwner>(this.ownerurl,owner,httpOptions);
  }

  deleteChallanById(challanNo : number) : Observable<Challan> {
    const httpOptions = {
      headers : new HttpHeaders ({
        'Content-type' : 'application/json' ,
        'Authorization' : 'auth-token' ,
        'Access-Control-Allow-origin' : "*"
      })
    }
    return this.httpClient.delete<Challan>(this.challanurl + `/${challanNo}`,httpOptions);
  }
}

interface getChallanResponse {
  _embedded : {
    challans : Challan[]
  }
}

interface getVoilationResponse {
  _embedded : {
    voilations : Voilation[]
  }
}

