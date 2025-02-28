import { Component, ChangeDetectorRef, HostListener, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { NavigationEnd, RouterOutlet, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'dialexconsultores';
  isMenuOpen = false;

  constructor(private router: Router, private cdRef: ChangeDetectorRef) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.cerrarMenu();
    });
  }

  
    
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.cdRef.detectChanges();
  }


  abrirMenu() {
    this.isMenuOpen = true;
    this.cdRef.detectChanges();
  }
  
  cerrarMenu() {
    this.isMenuOpen = false;
    this.cdRef.detectChanges();
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    const dropdown = document.querySelector('.custom-dropdown');
    if (dropdown && !dropdown.contains(event.target as Node)) {
      this.cerrarMenu();
    }
  }
}
