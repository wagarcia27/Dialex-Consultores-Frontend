import { Component, ChangeDetectorRef } from '@angular/core';
import { NavigationEnd, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dialexconsultores';
  isMenuOpen = false;

  constructor(private router: Router, private cdRef: ChangeDetectorRef) {
    console.log('Constructor ejecutado');

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      console.log('Evento de navegación detectado:', event);
      setTimeout(() => {
        this.isMenuOpen = false;
        this.cdRef.detectChanges();
        console.log('isMenuOpen actualizado a:', this.isMenuOpen);
      }, 10); // 🔥 Le da tiempo al DOM para actualizarse antes de cerrar el menú
    });
    }
    

  ngOnInit(): void {
    console.log('ngOnInit ejecutado, estado inicial de isMenuOpen:', this.isMenuOpen);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.cdRef.detectChanges(); // 🔥 Forzar actualización del DOM
    console.log('toggleMenu ejecutado, nuevo estado de isMenuOpen:', this.isMenuOpen);
  }

  cerrarMenu() {
    this.isMenuOpen = false;
    console.log("Menú cerrado");
    document.querySelector('.custom-dropdown')?.classList.add('menu-hide');
  
    // Remueve la clase después de un breve tiempo para evitar que interfiera con hover
    setTimeout(() => {
      document.querySelector('.custom-dropdown')?.classList.remove('menu-hide');
    }, 300);
  }
}
