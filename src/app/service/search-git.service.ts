import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchGitService {
  apiUrl: string = 'https://api.github.com/users/jkllr/repos'
  apiKey: string = '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'
  constructor(private http: HttpClient) { }

  get
}
