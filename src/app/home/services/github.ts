import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export interface GitHubUser {
  login: string;
  avatar_url: string;
  name: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private http = inject(HttpClient);
  private readonly API_URL = 'https://api.github.com/users';
  async getUser(username: string): Promise<GitHubUser> {
    return firstValueFrom(this.http.get<GitHubUser>(`${this.API_URL}/${username}`));
  }
}
