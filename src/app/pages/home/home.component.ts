import { Component } from '@angular/core';
import { CarrouselComponent } from "./carrousel/carrousel.component";
import { AuthService } from '../../services/auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CarrouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

 constructor(private authService: AuthService, private router: Router) {}
  irAPerfumes() {
    this.router.navigate(['/productos']);
  }

    irACosmeticos() {
    this.router.navigate(['/cosmeticos']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }


}
