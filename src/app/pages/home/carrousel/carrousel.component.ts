import { Component } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  imports: [],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.css'
})
export class CarrouselComponent {
  banners: string[] = [
    'assets/banners/banner1.jpg',
    'assets/banners/banner2.jpg',
    'assets/banners/banner3.jpg',
    'assets/banners/banner4.jpg',
    'assets/banners/banner5.jpg'
  ];

  currentIndex = 0;

  getTransform(): string {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.banners.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.banners.length) % this.banners.length;
  }

}
