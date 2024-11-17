import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {}

  // Método que verifica se a navegação principal deve ser exibida
  isMainNavigation(): boolean {
    const mainRoutes = ['/', '/sobre', '/ajuda'];
    return mainRoutes.includes(this.router.url);
  }
}

