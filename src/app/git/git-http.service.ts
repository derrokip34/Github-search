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
    return this.http.get('https://api.github.com/users/' + this.username + '?access_token=C755c2a99d225530b5cb5b9bbafbe8381a8e0bdc');
  }

  findUserRepo() {
    return this.http.get('https://api.github.com/users/' + this.username + '?access_token=C755c2a99d225530b5cb5b9bbafbe8381a8e0bdc');
  }

  userName(username: string) {
    this.username = username;
  }

}
