import { Component, OnInit } from '@angular/core';
import { GitHttpService } from '../git/git-http.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  username: any;
  response: any;
  projects: any;

  constructor(private service: GitHttpService, private http: HttpClient) {
    this.username = "derrokip34"
  }

  showUserProfile() {
    this.service.userName(this.username);
    this.service.findUserProfile().subscribe(response =>{
      this.response = response;
    });
    this.service.findUserRepo().subscribe(projects =>{
      this.projects = projects;
      console.log(projects)
    })
  }

  ngOnInit(): void {
  }

}
