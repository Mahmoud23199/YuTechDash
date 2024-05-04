import { Component, Renderer2 } from '@angular/core';
import { Inews } from '../model/Inews';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/Services/news.service';
import { AuthorService } from 'src/app/Services/author.service';
import { IAuthor } from '../model/Iauthor';

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent {

  id: string | null = null;
  newData:any
  isEmpty:boolean=false;

  constructor(private activeRouter:ActivatedRoute,private authorService:AuthorService,private newsService:NewsService,private renderer: Renderer2,private router:Router){}


  ngOnInit(): void {
  this.id= this.activeRouter.snapshot.paramMap.get('id');
  console.log(this.id)
      
    

   this.authorService.getaAutherById(this.id).subscribe({
    next:(data=>{
      this.newData=data;
    })
   })

  
}

update(authorName:string,biography:string,country:string)
{
  if (!authorName || !biography || !country) {
    this.isEmpty = true;
} else {
  this.isEmpty = false;

    console.log(`${authorName} and ${biography} and ${country}`);

    const updateData:IAuthor={
      id: this.newData.id,
      authorName: authorName,
      country: country,
      biography: biography
    }

    this.authorService.updateAuthor(updateData).subscribe({
      next:(data=>{

      }),
      error:(err=>(
        this.router.navigate(['authorPage'])
      ))
    })
   }


}

home(){
  this.router.navigate(['authorPage'])
}

}

