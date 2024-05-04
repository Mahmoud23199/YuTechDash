import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient:HttpClient) { }
  baseUrl: string = 'http://localhost:5084';


  getAllNews():Observable<any>
  {
    return this.httpClient.get(`${this.baseUrl}/api/News`)
  }

  getNewsById(id:any):Observable<any>
  {
    return this.httpClient.get(`${this.baseUrl}/api/News/${id}`)
  }
  
  getFilterNews(newsNameFilter: string|null = null, orderBy: string = 'Id', orderByDirection: string = 'ASC'): Observable<any> {
    // console.log(`1=>${newsNameFilter} 2=>${orderBy} 3=>${orderByDirection}`)
    if(newsNameFilter==null||newsNameFilter==""){
    const url = `${this.baseUrl}/api/News/GetNewsOrderBy?orderBy=${orderBy}&orderByDirection=${orderByDirection}`;
    // console.log(url)
    return this.httpClient.get<any>(url);
    }
    else{
      const url = `${this.baseUrl}/api/News/GetNewsOrderBy?newsNameFilter=${newsNameFilter}&orderBy=${orderBy}&orderByDirection=${orderByDirection}`;
      // console.log(url)
      return this.httpClient.get<any>(url);
    }

  }
}
