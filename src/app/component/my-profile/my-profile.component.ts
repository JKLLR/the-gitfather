import { Component, OnInit } from '@angular/core';
import { SearchGitService } from 'src/app/service/search-git.service';
import { UsersClass } from 'src/app/users-class';
import { RepoClass } from 'src/app/repo-class';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  user!: UsersClass;
  repos!: RepoClass[];

  userNotFound(){
    return "User not found"
  }

  constructor(private searchgit:SearchGitService) { }

  ngOnInit(){
    this.searchgit.getUserData("jkllr");
    this.user= this.searchgit.user;

    this.searchgit.getRepositoryData("jkllr")
    this.repos= this.searchgit.repos;

  }


}
