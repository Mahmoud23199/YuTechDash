import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthloginService } from 'src/app/Services/authlogin.service';
import { AuthorService } from 'src/app/Services/author.service';
import { NewsService } from 'src/app/Services/news.service';
import Swal, { SweetAlertResult } from 'sweetalert2';

@Component({
  selector: 'app-author-in-dash',
  templateUrl: './author-in-dash.component.html',
  styleUrls: ['./author-in-dash.component.css']
})
export class AuthorInDashComponent {


  @ViewChild('filter') filterInput!: ElementRef;
  allAuthorData: any;
  sort: string | null = null;
  dir: string | null = null;
  filterdata: string | null = null;
  constructor(private authorService: AuthorService,private authlogin: AuthloginService, private router: Router) { }

  ngOnInit(): void {
    this.authorService.getAllAuthors().subscribe({
      next: (data => {
        this.allAuthorData = data;
        console.log(this.allAuthorData)
      })
    });
  }

  onSubmit(filterValue: string): void {
    this.filterdata = filterValue;
    this.filterInput.nativeElement.value = '';
    this.sendFilterData();
  }

  sendFilterData(): void {
    const sortValue = this.sort ?? 'Id';
    const dirValue = this.dir ?? 'ASC';
    this.authorService.getFilterAuthor(this.filterdata, sortValue, dirValue).subscribe({
      next: (data => {
        console.log(this.allAuthorData)
        this.allAuthorData = data;
      })
    });
    this.filterInput.nativeElement.value = '';
    this.filterdata = '';
  }

  update(id: number): void {
    this.router.navigate(['authorUpdate', id]);
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
        this.authorService.deleteAuthor(id).subscribe({
          next: (response) => {
          },
          error: (error) => {
            console.error(error);
            this.allAuthorData = this.allAuthorData.filter((item: any) => item.id !== id);
            Swal.fire("Deleted!", "Your imaginary file has been deleted.", "success");

          }
        });
      }
    });
  }

  AddedNews(){
    this.router.navigate(['addedAuthor'])
  }
  
  
}
