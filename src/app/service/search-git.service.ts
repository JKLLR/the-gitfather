import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersClass } from '../users-class';
import { RepoClass } from '../repo-class';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchGitService {
  user: UsersClass;
  repos: RepoClass[] = [];




  getUserData(userName: string) {
    interface userApiResponse {
      name:string;
      followers: string;
      following: string;
      login: string;
      avatar_url: string;
      public_repos: number;
      created_at: Date,
    }

  
    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<userApiResponse>(`https://api.github.com/users/${userName}?${environment.apiKey}`).toPromise().then(response => {
        this.user.name =  response.name;
        this.user.followers = response.followers;
        this.user.following = response.following;
        this.user.avatar_url = response.avatar_url;
        this.user.login = response.login;
        this.user.public_repos = response.public_repos;
        this.user.created_at = response.created_at;

        resolve()
      },
        error => {
          this.user.login = 'User not found'
          console.log("Something went wrong")
          reject(error)
        })

    })
    return promise;
  }

  

  getRepositoryData(userName: string) {

    interface repositoryApiResponse {
      name: string,
      description: string,
      html_url: string,
      language: string,
      updated_at:Date

    }

    let promise = new Promise<void>((resolve, reject) => {
      let repoLength = this.repos.length;
      for (let i = 0; i < repoLength; i++) {
        this.repos.pop()
      }

      this.http.get<repositoryApiResponse>(`https://api.github.com/users/${userName}/repos?${environment.apiKey}`).toPromise().then(response => {
        for (let i = 0; i < this.user.public_repos; i++) {
          let repo = new RepoClass("", "", "", "",new Date())


          repo.name = response[i]["name"]
          repo.description = response[i]["description"]
          repo.html_url = response[i]["html_url"]
          repo.language = response[i]["language"]
          repo.updated_at = response[i]["updated_at"]

          this.repos.push(repo)
        }
        resolve()

      },
        error => {
          console.log("Could not find repo")
          reject(error)
        })
    })
    return promise

  }





  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.user = new UsersClass("", "", "", "",'');
  }



}



