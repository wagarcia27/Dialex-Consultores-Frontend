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
    event.stopPropagation();
    if (this.isMobile) {
      this.isMenuOpen = !this.isMenuOpen;
      if (this.isMenuOpen) {
        this.renderer.addClass(document.body, 'menu-open');
      } else {
        this.renderer.removeClass(document.body, 'menu-open');
      }
      this.cdRef.detectChanges();
    }
  }

  cerrarMenu() {
    this.isMenuOpen = false;
    this.renderer.removeClass(document.body, 'menu-open');
  }

  seleccionarOpcion() {
    if (this.isMobile) {
      this.isMenuOpen = false;
      this.isNavbarCollapsed = true;
      this.renderer.removeClass(document.body, 'menu-open');
    }
  }
}
