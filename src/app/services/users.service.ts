import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = "https://localhost:44351/api/user"
  constructor(private http: HttpClient) {}

  getUser(username: string): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl+'/'+username);
  }

  addUser(user: User): Observable<User>{
    user.projectId = user.username;
    return this.http.post<User>(this.baseUrl, user);
  }

  updateUserDetails(username: string ,user: User){
    user.projectId = username;
    return this.http.put<User>(this.baseUrl+'/'+username, user)
  }
}
