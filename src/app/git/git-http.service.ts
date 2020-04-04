import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repository } from '../repository';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class GitHttpService {

  private username = '';
  user: User;
  repo:Repository;

  constructor(private http: HttpClient) {}
    
  findUserProfile() {
    return this.http.get('https://api.github.com/users/' + this.username + '?access_token=99a32c70d810324b00e576547bd699c2f2ed3060');
  }

  findUserRepo() {
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?access_token=99a32c70d810324b00e576547bd699c2f2ed3060');
  }

  userName(username: string) {
    this.username = username;
  }

}
