import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListePays } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private readonly http: HttpClient) { }

  getAllCountries(): Observable<ListePays[]>{
    const url = `${this.apiUrl}/all`
    return this.http.get<ListePays[]>(url);
  }
}
