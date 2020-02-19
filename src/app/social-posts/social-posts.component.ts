import { Component, OnInit } from "@angular/core";
import { Post } from "../interfaces/post";

@Component({
  selector: "app-social-posts",
  templateUrl: "./social-posts.component.html",
  styleUrls: ["./social-posts.component.css"]
})
export class SocialPostsComponent implements OnInit {
  show: boolean= false;
  
  listOfPost: Post[] = [
    { title: "Grand Circus", thought: "Amazing" },
    { title: "TypeScript", thought: "The best" }
  ];
  constructor() {}

  ngOnInit(): void {}

  onSubmit(post:Post){
    this.listOfPost.unshift(post);
  }
  onDelete(index:number){
    this.listOfPost.splice(index,1);
  }
  
  showForm(){
this.show = !this.show;
  }

}
