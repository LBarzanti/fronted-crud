import { Injectable } from '@angular/core';
import{HttpClient,HttpParams}from '@angular/common/http';
import{Employee, ServerData} from '../../types/Employee';
import { Observable, retry } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http:HttpClient) { }

  getData(url:string):Observable<ServerData> {
    return this.http.get<ServerData>(url);
  }
  deleteRow(apiURL:string):Observable<ServerData>{
    return this.http.delete<ServerData>(apiURL).pipe(retry(1));

  }
  changeRow(apiURL:string, element: Employee):Observable<ServerData>{
    return this.http.put<ServerData>(apiURL, element).pipe(retry(1));
  }


}
