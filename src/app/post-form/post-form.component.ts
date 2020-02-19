import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Post} from "../interfaces/post"

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() submitted= new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  addForm(form:NgForm){
this.submitted.emit(form.value);

  }
//   addPost(post:Post){


// }
