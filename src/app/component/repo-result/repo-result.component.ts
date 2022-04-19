import { Component, OnInit } from '@angular/core';
import { SearchGitService } from 'src/app/service/search-git.service';
import { RepoByName } from 'src/app/repo-by-name';
import { ActivatedRoute } from '@angular/router';
import { NumberOfRepositories } from 'src/app/number-of-repositories';

@Component({
  selector: 'app-repo-result',
  templateUrl: './repo-result.component.html',
  styleUrls: ['./repo-result.component.css']
})
export class RepoResultComponent implements OnInit {

  reposByName:RepoByName[];
  reponame:string;
  numberOfRepos:NumberOfRepositories;

  constructor( private route: ActivatedRoute, private searchGitService: SearchGitService ) {}

  repoResult(){
    this.reponame = this.route.snapshot.paramMap.get('reponame')
    this.searchGitService.repoByNameRequest(this.reponame).then((response) =>{
      this.reposByName =this.searchGitService.repobyname;
    });
    this.searchGitService.repoByNameNumberRequest(this.reponame).then((response) =>{
      this.numberOfRepos =this.searchGitService.numberOfRepos;
    });
    console.log(this.numberOfRepos)
  }

  ngOnInit(){
    this.repoResult()
  }

}
