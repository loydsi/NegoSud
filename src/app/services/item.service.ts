import { Injectable } from '@angular/core';
import { Item } from "../data/item.model";
import { WineType } from "../data/wineType.model";
import { Provider } from "../data/provider.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private Http: HttpClient) { }
  public getAllItemEndPoint = "http://localhost:5213/api/Item"
  public getSingleItemEndPoint = "http://localhost:5213/api/Item/"

  public getAllWineTypeEndPoint = "http://localhost:5213/api/WineType"
  public getSingleWineTypeEndPoint = "http://localhost:5213/api/WineType/"

  public getAllProviderEndPoint = "http://localhost:5213/api/Provider"
  public getSingleProviderEndPoint = "http://localhost:5213/api/Provider/"

  GetItem():Observable<Item[]>{
    return this.Http.get<Item[]>(this.getAllItemEndPoint);
  }

  GetSingleItem(id:number):Observable<Item>{
    return this.Http.get<Item>(this.getSingleItemEndPoint+id)
  }

  GetSingleProvider(id:number):Observable<Provider>{
    return this.Http.get<Provider>(this.getSingleProviderEndPoint+id)
  }

  GetSingleWineType(id:number):Observable<WineType>{
    return this.Http.get<WineType>(this.getSingleWineTypeEndPoint+id)
  }

  GetWineType():Observable<WineType[]>{
    return this.Http.get<WineType[]>(this.getAllWineTypeEndPoint);
  }

  GetProvider():Observable<Provider[]>{
    return this.Http.get<Provider[]>(this.getAllProviderEndPoint);
  }
}
