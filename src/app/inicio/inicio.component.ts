import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { NavigationEnd, RouterOutlet, Router, RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [ImageModule, RouterModule, RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
