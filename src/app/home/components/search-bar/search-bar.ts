import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss',
  standalone: true,
  imports: [FormsModule, InputTextModule, ButtonModule, FloatLabelModule,

  ],
})
export class SearchBar {
  username = '';

  @Output() search = new EventEmitter<string>();

  emitirBusca() {
    if (this.username.trim()) {
      this.search.emit(this.username.trim());
    }
  }
}
