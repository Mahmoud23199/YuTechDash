import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { CustomJwtPayload } from '../Component/model/CustomJwtPayload';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthloginService {

  baseUrl: string = 'http://localhost:5084';
  tokenKey: string = 'auth_token';
  teacherId:any='';
  currentUserId:string='UserId';
  IsLogin:any= new BehaviorSubject(null);

 constructor(private httpClient: HttpClient,private router: Router) {
   if(localStorage.getItem(this.tokenKey) !==null)
     {
        this.saveCurrentUserId() 
     }
 }




 login(data: any): Observable<any> {
   return this.httpClient.post(`${this.baseUrl}/api/Account/Login`, data).pipe(
     tap((response: any) => {
       if (response && response.token) {
        // Save token
         localStorage.setItem(this.tokenKey, response.token);
          this.saveCurrentUserId()

       }
     }),
     catchError(error => {

      console.log(error)
       

       // Return an observable that emits the error
       return throwError(error);
     })
   );
 }







 getToken(): string | null {
   return localStorage.getItem(this.tokenKey);
 }

 removeToken(): void {
   localStorage.removeItem(this.tokenKey);
 }
 removeUserId(): void {
   localStorage.removeItem(this.currentUserId);
 }
 getUserId(): any {
  return  localStorage.getItem(this.currentUserId);
 }


 //have id of user
 currentUser:any=new BehaviorSubject(null) ;

 saveCurrentUserId(): any {
   const token = localStorage.getItem(this.tokenKey);
   if (token) {

    const decodedUser: any = jwtDecode(token);
    const nameIdentifier = decodedUser["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];

    // console.log(`User ID: ${nameIdentifier}`);
    localStorage.setItem(this.currentUserId, nameIdentifier);
     
    //  console.log(`id == ${localStorage.getItem(this.currentUserId)}`);
     this.IsLogin.next(decodedUser);
     return decodedUser;
   } else {
     console.log('No token found.');
   }
 }
}