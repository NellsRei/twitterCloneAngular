import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../Model/user';
import { Observable } from 'rxjs';
import { Posts } from '../../Model/posts';
import { Comments } from '../../Model/comments';

@Injectable({
  providedIn: 'root'
})
export class AllRoutesService {

  private readonly userLink = "https://jsonplaceholder.typicode.com/users/1"
  private readonly postsURL = " https://jsonplaceholder.typicode.com/posts"
  private readonly commentsURL = "https://jsonplaceholder.typicode.com/comments"

  constructor(private http:HttpClient) { }

  getUser():Observable<User[]>{
    return this.http.get<User[]>(this.userLink)
  }
  getPosts():Observable<Posts[]>{
    return this.http.get<Posts[]>(this.postsURL)
  }
  getComments():Observable<Comments[]>{
    return this.http.get<Comments[]>(this.commentsURL)
  }
}
