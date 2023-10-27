import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private ApiUrl = environment.ApiUrl;

  constructor(private http:HttpClient) { }

  getSizes():Observable<any>{
    return this.http.get(this.ApiUrl+'/Sizes')
  }
}
