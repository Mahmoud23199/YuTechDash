import { Injectable } from '@angular/core';
import { IaddedNews } from '../Component/model/IaddNews';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Inews } from '../Component/model/Inews';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private httpClient:HttpClient) { }
  baseUrl: string = 'http://localhost:5084';


  getAllAuthors():Observable<any>
  {
    return this.httpClient.get(`${this.baseUrl}/api/Authors`)
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
  


  deleteNews(id: number): Observable<any> {
    const url = `${this.baseUrl}/api/News/${id}`;
    return this.httpClient.delete<any>(url);
  }

  updateNews(news: Inews): Observable<Inews> {
    return this.httpClient.put<Inews>(`${this.baseUrl}/api/News`, news); 
  }
}