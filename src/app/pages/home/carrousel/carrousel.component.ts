import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  imports: [ CommonModule],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.css'
})
export class CarrouselComponent implements OnInit, OnDestroy{
  banners: string[] = [
    'images/banners/Banner-Lattafa-Eternal-Oud.png',
    'images/banners/Banner-Amber-Oud.png',
    'images/banners/Banner-Lattafa-Emaan.png',
    'images/banners/Banner-Lattafa-Emeer.png',
    'images/banners/Banner-Lattafa-Atheeri.png'
  ];

  currentIndex: number = 0;
  autoSlideInterval: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    clearInterval(this.autoSlideInterval);
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 3500);
  }

  pauseAutoSlide(): void {
    clearInterval(this.autoSlideInterval);
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.banners.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.banners.length) % this.banners.length;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }

  getTransform(): string {
    return `translateX(-${this.currentIndex * 100}%)`;
  }
}
