import { Injectable } from '@angular/core';
import { IaddedNews } from '../Component/model/IaddNews';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Inews } from '../Component/model/Inews';
import { IAuthor } from '../Component/model/Iauthor';

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


  getaAutherById(id:any):Observable<any>
  {
    return this.httpClient.get(`${this.baseUrl}/api/Authors/${id}`)
  }

  
  getFilterAuthor(newsNameFilter: string|null = null, orderBy: string = 'Id', orderByDirection: string = 'ASC'): Observable<any> {
    // console.log(`1=>${newsNameFilter} 2=>${orderBy} 3=>${orderByDirection}`)
    if(newsNameFilter==null||newsNameFilter==""){
    const url = `${this.baseUrl}/api/Authors/GetAuthorOrderBy?orderBy=${orderBy}&orderByDirection=${orderByDirection}`;
    console.log(url)
    return this.httpClient.get<any>(url);
    }
    else{
      const url = `${this.baseUrl}/api/Authors/GetAuthorOrderBy?authorNameFilter=${newsNameFilter}&orderBy=${orderBy}&orderByDirection=${orderByDirection}`;
      console.log(url)
      return this.httpClient.get<any>(url);
    }

  }
  


  deleteAuthor(id: number): Observable<any> {
    const url = `${this.baseUrl}/api/Authors/${id}`;
    return this.httpClient.delete<any>(url);
  }

  updateAuthor(data:IAuthor ): Observable<IAuthor> {
    console.log(data)
    return this.httpClient.put<IAuthor>(`${this.baseUrl}/api/Authors`, data); 
  }
  addedAuthor(data:IAuthor):Observable<any>
  {
    return this.httpClient.post(`${this.baseUrl}/api/Authors`, data); 

  }


}