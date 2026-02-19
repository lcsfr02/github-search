import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Footer,
    Header,
    Home,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  protected readonly title = signal('github-search');
}
