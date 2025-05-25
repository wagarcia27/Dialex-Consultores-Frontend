import { Component, ChangeDetectorRef, HostListener, Renderer2, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {
  title = 'dialexconsultores';
  isMenuOpen = false;
  isNavbarCollapsed = true;
  isMobile = window.innerWidth <= 768;
  isMenuClosing = false;

  constructor(
    private router: Router, 
    private cdRef: ChangeDetectorRef,
    private renderer: Renderer2
  ) {
    // Scroll al inicio al cargar/recargar la página
    this.scrollToTopOnLoad();

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.cerrarMenu();
      this.isNavbarCollapsed = true;
      // También hacer scroll al inicio cuando se navega a una nueva página
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'auto' // Sin animación para navegación entre páginas
        });
      }, 100);
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

  ngOnInit(): void {
    // Asegurar scroll al inicio cuando el componente se inicializa
    if (typeof window !== 'undefined') {
      // Forzar scroll al inicio inmediatamente
      window.scrollTo(0, 0);
      
      // También con un pequeño delay para asegurar que el DOM esté listo
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'auto'
        });
      }, 50);
    }
  }

  @HostListener('document:click', ['$event'])
  handleDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    // Si se hace clic fuera del dropdown o en un enlace del dropdown, cerrar el menú
    if (!target.closest('.nav-item.dropdown') && this.isMenuOpen) {
      this.cerrarMenu();
    } else if (target.closest('.dropdown-item') && this.isMenuOpen) {
      // Si se hace clic en un item del dropdown, cerrar inmediatamente
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
    this.cdRef.detectChanges();
  }

  cerrarMenu() {
    this.isMenuOpen = false;
    this.renderer.removeClass(document.body, 'menu-open');
    
    // Forzar el cierre del menú removiendo clases CSS directamente
    const dropdownElement = document.querySelector('.nav-item.dropdown');
    if (dropdownElement) {
      this.renderer.removeClass(dropdownElement, 'menu-open');
    }
    
    const dropdownContainer = document.querySelector('.dropdown-menu-container');
    if (dropdownContainer) {
      this.renderer.removeClass(dropdownContainer, 'show');
    }
    
    this.cdRef.detectChanges();
  }

  seleccionarOpcion() {
    // Cerrar menú desplegable de servicios inmediatamente
    this.isMenuOpen = false;
    // Cerrar menú móvil
    this.isNavbarCollapsed = true;
    // Remover clase del body
    this.renderer.removeClass(document.body, 'menu-open');
    
    // Forzar el cierre del menú removiendo clases CSS directamente
    const dropdownElement = document.querySelector('.nav-item.dropdown');
    if (dropdownElement) {
      this.renderer.removeClass(dropdownElement, 'menu-open');
    }
    
    const dropdownContainer = document.querySelector('.dropdown-menu-container');
    if (dropdownContainer) {
      this.renderer.removeClass(dropdownContainer, 'show');
    }
    
    // Forzar detección de cambios para asegurar que el menú se cierre
    this.cdRef.detectChanges();
    
    // Scroll al inicio de la página después de que la navegación se complete
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 300);
  }

  cerrarMenuInmediato() {
    // Marcar que el menú se está cerrando para desactivar hover temporalmente
    this.isMenuClosing = true;
    this.isMenuOpen = false;
    this.isNavbarCollapsed = true;
    this.renderer.removeClass(document.body, 'menu-open');
    this.cdRef.detectChanges();
    
    // Reactivar hover después de un tiempo
    setTimeout(() => {
      this.isMenuClosing = false;
      this.cdRef.detectChanges();
    }, 1000);
    
    // Scroll al inicio después de la navegación
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 300);
  }

  seleccionarServicio() {
    // Función específica para servicios que fuerza el cierre inmediato
    this.isMenuOpen = false;
    this.isNavbarCollapsed = true;
    this.renderer.removeClass(document.body, 'menu-open');
    
    // Usar setTimeout para asegurar que el DOM se actualice
    setTimeout(() => {
      const dropdownElement = document.querySelector('.nav-item.dropdown');
      if (dropdownElement) {
        this.renderer.removeClass(dropdownElement, 'menu-open');
      }
      
      const dropdownContainer = document.querySelector('.dropdown-menu-container');
      if (dropdownContainer) {
        this.renderer.removeClass(dropdownContainer, 'show');
      }
      
      this.cdRef.detectChanges();
    }, 0);
    
    // Scroll al inicio
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 300);
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

  // Método para hacer scroll al inicio al cargar/recargar la página
  private scrollToTopOnLoad(): void {
    // Verificar si la página se está cargando por primera vez o recargando
    if (typeof window !== 'undefined') {
      // Usar setTimeout para asegurar que el DOM esté completamente cargado
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'auto' // Sin animación para carga inicial
        });
      }, 0);
      
      // También agregar listener para el evento beforeunload (antes de recargar)
      window.addEventListener('beforeunload', () => {
        // Guardar que se va a recargar
        sessionStorage.setItem('page-reloading', 'true');
      });
      
      // Verificar si se recargó la página
      if (sessionStorage.getItem('page-reloading') === 'true') {
        sessionStorage.removeItem('page-reloading');
        window.scrollTo({
          top: 0,
          behavior: 'auto'
        });
      }
    }
  }

}
