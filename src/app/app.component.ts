import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'rest-countries-app';
  theme: Theme = 'light-theme';
  constructor(@Inject(DOCUMENT) private readonly document: Document, private readonly renderer: Renderer2){}

  ngOnInit(): void {
      this.renderer.addClass(this.document.body, this.theme);
  }

  toggleTheme(): void {
    const newTheme = this.theme == 'light-theme' ? 'dark-theme' : 'light-theme';
    this.document.body.classList.replace(this.theme, newTheme)
    this.theme = newTheme;
  }
}

type Theme = 'light-theme' | 'dark-theme';
