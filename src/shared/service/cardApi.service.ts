import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {IdataCard} from "../interface/IdataCard";

const host = 'http://localhost:3000'

@Injectable({providedIn: 'root'})
export class PurchasesApiService {
  constructor(private httpClient: HttpClient) {
  }

  add(purchase: IdataCard): Observable<IdataCard> {
    return this.httpClient.post<IdataCard>(host, purchase);
  }

  delete(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${host}/${id}`);
  }

  getAll(): Observable<IdataCard[]> {
    return this.httpClient.get<IdataCard[]>(host);
  }

}
