import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { NewsService } from 'src/app/Services/news.service';
import { IaddedNews } from '../model/IaddNews';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthorService } from 'src/app/Services/author.service';

@Component({
  selector: 'app-addednews',
  templateUrl: './addednews.component.html',
  styleUrls: ['./addednews.component.css']
})
export class AddednewsComponent implements OnInit {
  isInputFocused: boolean = false;
  signupForm!: FormGroup;
  AuthorsData:any;
  
  constructor(private fb: FormBuilder,private newsService:NewsService,private router:Router,private authorService:AuthorService) {}
  ngOnInit(): void {
   
    this.signupForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      newsContent: ['',Validators.required,],
      imageUrl: ['',Validators.required,],
      publicationDate: ['', [Validators.required,this.validatePublicationDate]],
      authorId: ['', Validators.required],
   
    });
    this.getAllAuthors()

  }
  //custom validator
  validatePublicationDate(control: any) {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();
    const maxDate = new Date(currentDate);
    maxDate.setDate(currentDate.getDate() + 7); 

    if (selectedDate >= currentDate && selectedDate <= maxDate) {
      return null; 
    } else {
      return { invalidDate: true }; 
    }
  }


    getAllAuthors()
    {
      this.authorService.getAllAuthors().subscribe({
        next:(data=>{
          this.AuthorsData=data;
          console.log(this.AuthorsData)
        })
      })
    }
  
  
  get description()
  {
    return this.signupForm.get('description')
  }
  
  get newsContent()
  {
    return this.signupForm.get('newsContent')
  }
  get title()
  {
    return this.signupForm.get('title')
  }
  get imageUrl()
  {
    return this.signupForm.get('imageUrl')
  }
  
  get publicationDate()
  {
    return this.signupForm.get('publicationDate')
  }
 
  get authorId()
  {
    return this.signupForm.get('authorId')
  }

 
 
  

    onSubmit() {
   
    if (this.signupForm.valid) {
    const insertNewsData:IaddedNews=
    {
      title: this.signupForm.value.title,
      description: this.signupForm.value.description,
      newsContent:this.signupForm.value.newsContent,
      imageUrl:this.signupForm.value.imageUrl,
      publicationDate:this.signupForm.value.publicationDate,
      creationDate: new Date,
      authorId: this.signupForm.value.authorId
    }
    console.log(insertNewsData);
    this.newsService.addedNews(insertNewsData).subscribe({
      next:(data=>{
          console.log(data);
          this.router.navigate(['home'])
      }),
      error:(err=>{
        console.log(err);
  
      })
    })
     
    } else{

      Object.keys(this.signupForm.controls).forEach(controlName => {
        this.signupForm.get(controlName)?.markAsTouched();
    });

    }

      
    }



    


  }




  

