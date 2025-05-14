import { Component, ChangeDetectorRef, HostListener, Renderer2 } from '@angular/core';
import { NavigationEnd, RouterOutlet, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { ContactFormComponent } from './contacto/contact-form/contact-form.component';

declare var bootstrap: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, ContactFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dialexconsultores';
  isMenuOpen = false;
  isNavbarCollapsed = true;
  isMobile = window.innerWidth <= 768;

  constructor(
    private router: Router, 
    private cdRef: ChangeDetectorRef,
    private renderer: Renderer2
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.cerrarMenu();
      this.isNavbarCollapsed = true;
    });

    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth <= 768;
      if (!this.isMobile) {
        this.isMenuOpen = false;
        this.isNavbarCollapsed = true;
        this.renderer.removeClass(document.body, 'menu-open');
      }
    });
  }

  @HostListener('document:click', ['$event'])
  handleDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.nav-item.dropdown') && this.isMenuOpen) {
      this.cerrarMenu();
    }
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
    if (!this.isNavbarCollapsed) {
      this.isMenuOpen = false;
    }
    this.cdRef.detectChanges();
  }

  toggleMenu(event: Event) {
    event.preventDefault();
    this.isMenuOpen = !this.isMenuOpen;
  }

  cerrarMenu() {
    this.isMenuOpen = false;
    this.renderer.removeClass(document.body, 'menu-open');
  }

  seleccionarOpcion() {
    this.isMenuOpen = false;
    this.isNavbarCollapsed = true;
  }

  scrollToContact(event: Event) {
    event.preventDefault();
    const contactForm = document.getElementById('contacto');
    if (contactForm) {
      // Offset más grande para móvil para que se detenga más arriba
      const headerOffset = this.isMobile ? 60 : 20;
      const elementPosition = contactForm.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    // Cerrar el menú móvil si está abierto
    this.isNavbarCollapsed = true;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const dropdown = document.querySelector('.dropdown');
    if (dropdown && !dropdown.contains(event.target as Node)) {
      this.isMenuOpen = false;
    }
  }
}
