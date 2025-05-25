import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { ContactFormComponent } from '../../contacto/contact-form/contact-form.component';

@Component({
  selector: 'app-tributacion',
  standalone: true,
  imports: [CommonModule, RouterModule, ContactFormComponent],
  templateUrl: './tributacion.component.html',
  styleUrls: ['./tributacion.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class TributacionComponent {
  estadisticas = [
    {
      numero: '97%',
      texto: 'Satisfacción de clientes',
      icono: 'fas fa-smile'
    },
    {
      numero: '+1000',
      texto: 'Declaraciones procesadas',
      icono: 'fas fa-file-invoice'
    },
    {
      numero: '20+',
      texto: 'Años de experiencia',
      icono: 'fas fa-calendar-check'
    }
  ];

  servicios = [
    {
      titulo: 'Planeación Tributaria',
      descripcion: 'Estrategias fiscales optimizadas para su empresa',
      icono: 'fas fa-chart-line',
      animationDelay: '0s',
      features: [
        'Análisis fiscal personalizado',
        'Optimización de cargas tributarias',
        'Proyecciones fiscales'
      ]
    },
    {
      titulo: 'Cumplimiento Fiscal',
      descripcion: 'Gestión integral de obligaciones tributarias',
      icono: 'fas fa-check-circle',
      animationDelay: '0.2s',
      features: [
        'Declaraciones tributarias',
        'Informes fiscales',
        'Actualización normativa'
      ]
    },
    {
      titulo: 'Consultoría Especializada',
      descripcion: 'Asesoramiento experto en temas fiscales',
      icono: 'fas fa-users',
      animationDelay: '0.4s',
      features: [
        'Consultas específicas',
        'Auditorías preventivas',
        'Representación fiscal'
      ]
    }
  ];

  procesoDeTrabajo = [
    {
      titulo: 'Diagnóstico',
      descripcion: 'Evaluación inicial de su situación fiscal',
      icono: 'fas fa-search'
    },
    {
      titulo: 'Planificación',
      descripcion: 'Desarrollo de estrategias fiscales',
      icono: 'fas fa-tasks'
    },
    {
      titulo: 'Implementación',
      descripcion: 'Ejecución de soluciones tributarias',
      icono: 'fas fa-cogs'
    },
    {
      titulo: 'Seguimiento',
      descripcion: 'Monitoreo y ajustes continuos',
      icono: 'fas fa-chart-line'
    }
  ];

  beneficios = [
    {
      titulo: 'Experiencia Comprobada',
      descripcion: 'Más de 20 años en asesoría tributaria',
      icono: 'fas fa-star'
    },
    {
      titulo: 'Atención Personalizada',
      descripcion: 'Soluciones adaptadas a sus necesidades',
      icono: 'fas fa-user-tie'
    },
    {
      titulo: 'Actualización Constante',
      descripcion: 'Siempre al día con la normativa fiscal',
      icono: 'fas fa-sync'
    },
    {
      titulo: 'Soporte Continuo',
      descripcion: 'Acompañamiento en todo momento',
      icono: 'fas fa-headset'
    }
  ];

  faqs = [
    {
      pregunta: '¿Qué servicios de asesoría tributaria ofrecen?',
      respuesta: 'Ofrecemos una gama completa de servicios que incluyen planeación fiscal, cumplimiento tributario, consultoría especializada y más.'
    },
    {
      pregunta: '¿Cómo pueden ayudar a optimizar la carga tributaria de mi empresa?',
      respuesta: 'Analizamos su situación fiscal actual y desarrollamos estrategias legales para maximizar beneficios y minimizar la carga tributaria.'
    },
    {
      pregunta: '¿Con qué frecuencia actualizan sus servicios según la normativa?',
      respuesta: 'Mantenemos una actualización constante de nuestros servicios según los cambios en la legislación fiscal.'
    }
  ];

  scrollToForm() {
    const formElement = document.getElementById('contacto');
    if (formElement) {
      const headerOffset = 100;
      const elementPosition = formElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
