import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-costos-industriales',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './costos-industriales.component.html',
  styleUrls: ['./costos-industriales.component.scss']
})
export class CostosIndustrialesComponent {
  servicios = [
    {
      titulo: 'Sistemas de Costeo',
      descripcion: 'Implementación de sistemas de costeo adaptados a su industria.',
      icono: 'assets/icons/sistemas-costeo-icon.png'
    },
    {
      titulo: 'Análisis de Costos',
      descripcion: 'Evaluación detallada de costos para optimizar la rentabilidad.',
      icono: 'assets/icons/analisis-costos-icon.png'
    },
    {
      titulo: 'Control de Inventarios',
      descripcion: 'Gestión y control eficiente de inventarios y materias primas.',
      icono: 'assets/icons/inventarios-icon.png'
    },
    {
      titulo: 'Presupuestos',
      descripcion: 'Elaboración y seguimiento de presupuestos industriales.',
      icono: 'assets/icons/presupuestos-icon.png'
    }
  ];
}
