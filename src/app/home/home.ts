import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchBar } from './components/search-bar/search-bar';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { GithubService } from './services/github';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  imports: [
    CommonModule,
    FormsModule,
    SearchBar,
    ButtonModule,
    HttpClientModule,
    FloatLabelModule,
    Header,
    Footer,

  ],
})
export class Home {
  userData: any;
  repos: any[] = [];
  carregando = false;

  constructor(
    private http: HttpClient,
    private githubService: GithubService
  ) {}

  onSearch(username: string) {
    if (!username) return;
    this.carregando = true;

    this.http.get(`https://api.github.com/users/${username}`).subscribe({
      next: (data: any) => {
        this.userData = data;

        this.http.get(`https://api.github.com/users/${username}/repos`).subscribe({
          next: (repos: any) => {
            this.repos = repos;
            this.carregando = false;
          },
          error: () => {
            this.repos = [];
            this.carregando = false;
          },
        });
      },
      error: (err) => {
        console.error('Erro ao buscar usuário:', err);
        this.userData = null;
        this.repos = [];
        this.carregando = false;
      },
    });
  }
}
