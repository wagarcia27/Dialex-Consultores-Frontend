import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-revisoria-fiscal',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './revisoria-fiscal.component.html',
  styleUrls: ['./revisoria-fiscal.component.scss']
})
export class RevisoriaFiscalComponent {
  servicios = [
    {
      titulo: 'Revisión de Estados Financieros',
      descripcion: 'Evaluación detallada de la información financiera y su presentación.',
      icono: 'assets/icons/estados-financieros-icon.png'
    },
    {
      titulo: 'Control Interno',
      descripcion: 'Supervisión y evaluación de los sistemas de control interno.',
      icono: 'assets/icons/control-interno-icon.png'
    },
    {
      titulo: 'Cumplimiento Legal',
      descripcion: 'Verificación del cumplimiento de normas y estatutos.',
      icono: 'assets/icons/cumplimiento-legal-icon.png'
    },
    {
      titulo: 'Informes y Dictámenes',
      descripcion: 'Elaboración de informes y dictámenes profesionales.',
      icono: 'assets/icons/informes-icon.png'
    }
  ];
}
