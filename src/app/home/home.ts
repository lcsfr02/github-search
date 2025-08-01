import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchBar } from './components/search-bar/search-bar';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { GithubService } from './services/github';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';

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
    FloatLabelModule,
    Header,
    Footer,
  ],
})
export class Home {
  userData: any;
  carregando = false;

  constructor(
    private http: HttpClient,
    private githubService: GithubService
  ) {}


  onSearch(username: string) {
    if (!username) return;

    this.carregando = true;

    this.http.get(`https://api.github.com/users/${username}`).subscribe({
      next: (data) => {
        this.userData = data;
        this.carregando = false;
      },
      error: (err) => {
        console.error('Erro ao buscar usuário:', err);
        this.userData = null;
        this.carregando = false;
      },
    });
  }
}
