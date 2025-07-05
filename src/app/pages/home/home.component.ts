import { Component } from '@angular/core';
import { CarrouselComponent } from "./carrousel/carrousel.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CarrouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

  irAPerfumes() {
    this.router.navigate(['/productos']);
  }

}
