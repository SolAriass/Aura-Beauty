import { Component } from '@angular/core';
import { CarrouselComponent } from "./carrousel/carrousel.component";

@Component({
  selector: 'app-home',
  imports: [CarrouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
