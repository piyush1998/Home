import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Property_information } from '../Information/Property-Information';
@Injectable({
  providedIn: 'root'
})
export class EnrollmentServiceService {
public _url='http://127.0.0.1:8000/checking'
  constructor(private _http:HttpClient) { }//get and post (HttpClient)

  enrollment(fullInfo:Property_information){
   return this._http.post<any>(this._url,fullInfo);
 }
}
