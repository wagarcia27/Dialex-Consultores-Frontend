import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-politicas-privacidad',
  imports: [CommonModule],
  templateUrl: './politicas-privacidad.component.html',
  styleUrl: './politicas-privacidad.component.scss'
})
export class PoliticasPrivacidadComponent implements OnInit, OnDestroy {
  
  activeSection: string = 'introduccion';
  isSticky: boolean = false;
  showBackToTop: boolean = false;
  
  private observer!: IntersectionObserver;

  constructor() { }

  ngOnInit(): void {
    this.setupIntersectionObserver();
    this.scrollToTop();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Sticky sidebar
    this.isSticky = scrollTop > 300;
    
    // Back to top button
    this.showBackToTop = scrollTop > 500;
  }

  private setupIntersectionObserver(): void {
    const options = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
        }
      });
    }, options);

    // Observe all sections
    setTimeout(() => {
      const sections = document.querySelectorAll('.content-section');
      sections.forEach(section => this.observer.observe(section));
    }, 100);
  }

  scrollToSection(sectionId: string, event: Event): void {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
