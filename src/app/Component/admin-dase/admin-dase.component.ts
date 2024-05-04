import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/Services/news.service';

@Component({
  selector: 'app-admin-dase',
  templateUrl: './admin-dase.component.html',
  styleUrls: ['./admin-dase.component.css']
})
export class AdminDaseComponent {

  @ViewChild('filter') filterInput!: ElementRef;

  sort: string | null = null;
  dir: string | null = null;
  filterdata: string | null = null;
  constructor(private newsService:NewsService,private router:Router){}
  ngOnInit(): void {
   
  }

  onSubmit(filterValue: string): void {
   
    this.filterdata = filterValue;
    console.log(this.filterdata);
    this.filterInput.nativeElement.value="";
    this.sendFilterData()
  }

  sendFilterData() {
    const filter = {
      newsNameFilter: this.filterdata!,
      orderBy: this.sort!, 
      orderByDirection: this.dir!
    };
    this.filterInput.nativeElement.value="";
    this.filterdata="";

    this.router.navigate(['/home'], { queryParams: filter });
  }
}
