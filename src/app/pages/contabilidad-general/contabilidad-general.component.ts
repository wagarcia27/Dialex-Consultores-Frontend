import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from '../../contacto/contact-form/contact-form.component';

@Component({
  selector: 'app-contabilidad-general',
  standalone: true,
  imports: [CommonModule, RouterModule, ContactFormComponent],
  templateUrl: './contabilidad-general.component.html',
  styleUrls: ['./contabilidad-general.component.scss']
})
export class ContabilidadGeneralComponent {
  servicios = [
    {
      titulo: 'Contabilidad NIIF',
      descripcion: 'Implementación y mantenimiento de contabilidad bajo estándares internacionales.',
      icono: 'assets/icons/niif-icon.png'
    },
    {
      titulo: 'Gestión Contable',
      descripcion: 'Organización y mantenimiento de registros contables actualizados.',
      icono: 'assets/icons/gestion-icon.png'
    },
    {
      titulo: 'Estados Financieros',
      descripcion: 'Preparación y análisis de estados financieros bajo normativa vigente.',
      icono: 'assets/icons/estados-icon.png'
    },
    {
      titulo: 'Asesoría Contable',
      descripcion: 'Consultoría especializada en temas contables y financieros.',
      icono: 'assets/icons/asesoria-icon.png'
    }
  ];
}
