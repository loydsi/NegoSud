import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from "../data/customer.model"
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private Http: HttpClient) { }

  public getAllCustomerEndPoint = "http://localhost:5213/api/Employee";
  public GetSingleCustomerEndPoint = "http://localhost:5213/api/Employee/";
  public AddCustomerEndPoint = "http://localhost:5213/api/Employee";
  public UpdateCustomerEndPoint = "http://localhost:5213/api/Employee/";
  public DeleteCustomerEndPoint = "http://localhost:5213/api/Employee/";

  get(id:number):Observable<Customer>{
    return this.Http.get<Customer>(this.GetSingleCustomerEndPoint+id);
  }
  getAll():Observable<Customer[]>{
    return this.Http.get<Customer[]>(this.getAllCustomerEndPoint);
  }
  post(customer: Customer):Observable<Customer>{
    return this.Http.post<Customer>(this.AddCustomerEndPoint, customer);
  }
  put(customer:Customer):Observable<Customer>{
    return this.Http.put<Customer>(this.UpdateCustomerEndPoint, customer);
  }
  delete(id:number){
    return this.Http.delete<Customer>(this.DeleteCustomerEndPoint+id);
  } 
}
