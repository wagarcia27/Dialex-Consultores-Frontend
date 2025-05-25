import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from '../../contacto/contact-form/contact-form.component';

@Component({
  selector: 'app-tributacion',
  standalone: true,
  imports: [CommonModule, RouterModule, ContactFormComponent],
  templateUrl: './tributacion.component.html',
  styleUrls: ['./tributacion.component.scss']
})
export class TributacionComponent {
  servicios = [
    {
      titulo: 'Planeación Tributaria',
      descripcion: 'Estrategias para optimizar la carga tributaria de manera legal y eficiente.',
      icono: 'assets/icons/planeacion-icon.png'
    },
    {
      titulo: 'Declaraciones Tributarias',
      descripcion: 'Preparación y presentación de todas las declaraciones fiscales requeridas.',
      icono: 'assets/icons/declaraciones-icon.png'
    },
    {
      titulo: 'Consultoría Fiscal',
      descripcion: 'Asesoramiento especializado en normativa tributaria nacional e internacional.',
      icono: 'assets/icons/consultoria-icon.png'
    },
    {
      titulo: 'Representación ante la DIAN',
      descripcion: 'Gestión y defensa de sus intereses ante las autoridades fiscales.',
      icono: 'assets/icons/representacion-icon.png'
    }
  ];
}
