import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/Services/news.service';
import { Renderer2 } from '@angular/core';
import { Inews } from '../model/Inews';

@Component({
  selector: 'app-news-update',
  templateUrl: './news-update.component.html',
  styleUrls: ['./news-update.component.css']
})
export class NewsUpdateComponent implements OnInit {
  id: string | null = null;
  newData:any
  isEmpty:boolean=false;
  constructor(private activeRouter:ActivatedRoute,private newsService:NewsService,private renderer: Renderer2,private router:Router){}


  ngOnInit(): void {
  this.id= this.activeRouter.snapshot.paramMap.get('id');
  console.log(this.id)
      
    

   this.newsService.getNewsById(this.id).subscribe({
    next:(data=>{
      this.newData=data;
      console.log(data)
    })
   })

  
}

update(titledata:any,descriptiondata:any,newsContent:any)
{
 if(titledata==null||titledata==""||descriptiondata==null||descriptiondata==""||newsContent==null||newsContent==""){
  this.isEmpty=true;
 }else
 {
  this.isEmpty=false;
  const updatedData: Inews = {
    id: this.newData.id,
    title: titledata,
    description: descriptiondata,
    newsContent: newsContent,
    imageUrl: this.newData.imageUrl,
    publicationDate: this.newData.publicationDate,
    creationDate: this.newData.creationDate,
    authorId: this.newData.author.authorId
  };
  this.newsService.updateNews(updatedData).subscribe({
    next:(data=>{
      console.log(data);
      this.router.navigate(['home']);
    }),
    error:(err=>{
      console.log(err);
      this.router.navigate(['home']);

    })
  })

  
 }

}



}
