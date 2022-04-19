import { Component, OnInit } from '@angular/core';
import { UsersClass } from 'src/app/users-class';
import { SearchGitService } from 'src/app/service/search-git.service';
import { RepoClass } from 'src/app/repo-class';
import { ActivatedRoute, Router } from '@angular/router';
import { RepoByName } from 'src/app/repo-by-name';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  
  repos:RepoClass[];
  user:UsersClass;
  username:string; 

  constructor(private route: ActivatedRoute, private searchGitService: SearchGitService) { }

  searchResult(){
    this.username = this.route.snapshot.paramMap.get('username')
    this.searchGitService.getUserData(this.username)
    this.user = this.searchGitService.user
    this.searchGitService.getRepositoryData(this.username)
    this.repos =this.searchGitService.repos
  }

  ngOnInit(): void {
    this.searchResult()
  }

}
