import { Component, OnInit } from '@angular/core';
import { SearchGitService } from 'src/app/service/search-git.service';
import { UsersClass } from 'src/app/users-class';
import { RepoClass } from 'src/app/repo-class';
import { Router } from '@angular/router';
import { SearchResultComponent } from '../search-result/search-result.component';
import { RepoByName } from 'src/app/repo-by-name';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username:string;
  user:UsersClass;
  repos:RepoClass[];
  searchResult: SearchResultComponent;
  reposByName:RepoByName[];
  reponame:string;
  isShowUserForm = false;
  isShowRepoForm = false;

  constructor(private router: Router, private searchGitService: SearchGitService) { }

  toggleUserForm(){
    this.isShowUserForm = !this.isShowUserForm;
  }

  toggleRepoForm(){
    this.isShowRepoForm = !this.isShowRepoForm;
  }

  findProfile(){
    this.router.navigate(['/search-result',this.username]);
    this.searchGitService.getUserData(this.username)
    this.user = this.searchGitService.user
    this.searchGitService.getRepositoryData(this.username)
    this.repos =this.searchGitService.repos
  }

  findRepos(){
    this.router.navigate(['/repo-result',this.reponame]);
    this.searchGitService.getRepositoryData(this.reponame);
    this.reposByName =this.searchGitService.repobyname;
    this.searchGitService.repoByNameRequest(this.reponame);
  } 

  ngOnInit(): void {
  }

}
