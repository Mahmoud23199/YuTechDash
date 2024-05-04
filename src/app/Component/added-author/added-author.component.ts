import { Component } from '@angular/core';
import { IaddedNews } from '../model/IaddNews';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewsService } from 'src/app/Services/news.service';
import { Router } from '@angular/router';
import { AuthorService } from 'src/app/Services/author.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IAuthor } from '../model/Iauthor';

@Component({
  selector: 'app-added-author',
  templateUrl: './added-author.component.html',
  styleUrls: ['./added-author.component.css']
})
export class AddedAuthorComponent {

  isInputFocused: boolean = false;
  signupForm!: FormGroup;
  AuthorsData:any;
  
  constructor(private fb: FormBuilder,private newsService:NewsService,private router:Router,private authorService:AuthorService,private snackBar: MatSnackBar) {}
  ngOnInit(): void {
   
    this.signupForm = this.fb.group({
      authorName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      biography: ['', Validators.required],
      country: ['',Validators.required,],
    });
    this.getAllAuthors()

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
  
  
  get biography()
  {
    return this.signupForm.get('biography')
  }
  
  get country()
  {
    return this.signupForm.get('country')
  }
  get authorName()
  {
    return this.signupForm.get('authorName')
  }
 

 
 
  

    onSubmit() {
    if (this.signupForm.valid) {
    const insertNewsData:IAuthor=
    {
     authorName:this.signupForm.value.authorName,
     biography:this.signupForm.value.biography,
     country:this.signupForm.value.country
    }
    console.log(insertNewsData);
    this.authorService.addedAuthor(insertNewsData).subscribe({
      next:(data=>{
          console.log(data);
          this.snackBar.open('News posted successfully', 'Close', {
            duration: 5000, 
            verticalPosition: "top" 
          });
          this.router.navigate(['authorPage'])
      }),
      error:(err=>{
        console.log(err);
  
      })
    })
     
    } else{
       console.log("sdnks5")
      Object.keys(this.signupForm.controls).forEach(controlName => {
        this.signupForm.get(controlName)?.markAsTouched();
    });

    }

      
    }



    


  }

