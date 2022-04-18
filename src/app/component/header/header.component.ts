import { Component, OnInit } from '@angular/core';
import { SearchGitService } from 'src/app/service/search-git.service';
import { UsersClass } from 'src/app/users-class';
import { RepoClass } from 'src/app/repo-class';
import { Router } from '@angular/router';
import { SearchResultComponent } from '../search-result/search-result.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
