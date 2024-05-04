import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthloginService } from 'src/app/Services/authlogin.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
 constructor(private authlogin:AuthloginService,private router:Router){}

  logout()
  {
   this.authlogin.removeToken();
   this.authlogin.removeUserId();
   this.router.navigate(['login'])
  }
}
