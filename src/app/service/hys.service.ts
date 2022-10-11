import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hys } from '../model/hys';

@Injectable({
  providedIn: 'root'
})
export class HysService {
 //URL='http://localhost:8080/skill/';
  URL= 'https://backend-amt.herokuapp.com/skill/';

  constructor(private httpClient:HttpClient) { }

public lista():Observable<Hys[]>{
return this.httpClient.get<Hys[]>(this.URL + 'lista');
}

public detail(id:number): Observable<Hys>{
  return this .httpClient.get<Hys>(this.URL + `detail/${id}`);
}

public save(skill:Hys): Observable<any>{
  return this.httpClient.post<any>(this.URL + 'create', skill);
}

public update(id:number, skill:Hys): Observable<any>{
  return this.httpClient.put<any>(this.URL + `update/${id}`, skill);
}

public delete(id:number): Observable<any>{
  return this.httpClient.delete<any>(this.URL + `delete/${id}`);
}


}


