import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthloginService } from 'src/app/Services/authlogin.service';
import { NewsService } from 'src/app/Services/news.service';
import Swal from 'sweetalert2';
import swal, { SweetAlertResult } from 'sweetalert2';

@Component({
  selector: 'app-admin-dase',
  templateUrl: './admin-dase.component.html',
  styleUrls: ['./admin-dase.component.css']
})
export class AdminDaseComponent {

  @ViewChild('filter') filterInput!: ElementRef;
  allNewsData: any;
  sort: string | null = null;
  dir: string | null = null;
  filterdata: string | null = null;
  constructor(private newsService: NewsService,private authlogin: AuthloginService, private router: Router) { }

  ngOnInit(): void {
    this.newsService.getAllNews().subscribe({
      next: (data => {
        this.allNewsData = data;
        console.log(this.allNewsData);
      })
    });
   console.log(this.authlogin.getUserId())
  }

  onSubmit(filterValue: string): void {
    this.filterdata = filterValue;
    this.filterInput.nativeElement.value = '';
    this.sendFilterData();
  }

  sendFilterData(): void {
    const sortValue = this.sort ?? 'Id';
    const dirValue = this.dir ?? 'ASC';
    this.newsService.getFilterNews(this.filterdata, sortValue, dirValue).subscribe({
      next: (data => {
        this.allNewsData = data;
      })
    });
    this.filterInput.nativeElement.value = '';
    this.filterdata = '';
  }

  update(id: number): void {
    this.router.navigate(['newUpdate', id]);
  }
  

  delete(id: number): void {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this imaginary file!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, delete it!",
    }).then((result: SweetAlertResult) => {
      if (result.isConfirmed) {
        this.newsService.deleteNews(id).subscribe({
          next: (response) => {
          },
          error: (error) => {
            console.error(error);
            this.allNewsData = this.allNewsData.filter((item: any) => item.id !== id);
            Swal.fire("Deleted!", "Your imaginary file has been deleted.", "success");

          }
        });
      }
    });
  }

  AddedNews(){
    this.router.navigate(['addedNews'])
  }
  
  
}
