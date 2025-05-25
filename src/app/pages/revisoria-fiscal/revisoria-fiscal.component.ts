import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-revisoria-fiscal',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './revisoria-fiscal.component.html',
  styleUrls: ['./revisoria-fiscal.component.scss'],
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
export class RevisoriaFiscalComponent implements OnInit {
  servicios = [
    {
      titulo: 'Auditoría de Estados Financieros',
      descripcion: 'Evaluación detallada de la información financiera y su cumplimiento normativo.',
      icono: 'fas fa-file-invoice-dollar',
      animationDelay: '0s'
    },
    {
      titulo: 'Certificaciones y Dictámenes',
      descripcion: 'Emisión de documentos oficiales con validez ante entidades reguladoras.',
      icono: 'fas fa-file-signature',
      animationDelay: '0.2s'
    },
    {
      titulo: 'Control Interno',
      descripcion: 'Evaluación y recomendaciones sobre sistemas de control interno.',
      icono: 'fas fa-search',
      animationDelay: '0.4s'
    },
    {
      titulo: 'Cumplimiento Legal',
      descripcion: 'Verificación del cumplimiento de normas y regulaciones vigentes.',
      icono: 'fas fa-clipboard-check',
      animationDelay: '0.6s'
    }
  ];

  estadisticas = [
    {
      numero: '97%',
      texto: 'Satisfacción de clientes',
      icono: 'fas fa-smile'
    },
    {
      numero: '+500',
      texto: 'Auditorías Realizadas',
      icono: 'fas fa-file-signature'
    },
    {
      numero: '15+',
      texto: 'Años de experiencia',
      icono: 'fas fa-star'
    }
  ];

  metodologia = [
    {
      fase: 'Planeación',
      descripcion: 'Diseño del plan de trabajo y alcance de la revisoría.',
      icono: 'fas fa-tasks'
    },
    {
      fase: 'Evaluación',
      descripcion: 'Análisis de procesos y controles internos.',
      icono: 'fas fa-search'
    },
    {
      fase: 'Ejecución',
      descripcion: 'Aplicación de procedimientos de auditoría.',
      icono: 'fas fa-cogs'
    },
    {
      fase: 'Informes',
      descripcion: 'Elaboración de informes y dictámenes.',
      icono: 'fas fa-file-alt'
    }
  ];

  currentSlide = 0;
  testimonios = [
    {
      nombre: 'Carlos Martínez',
      cargo: 'Director General',
      empresa: 'Grupo Empresarial XYZ',
      comentario: 'La revisoría fiscal de Dialex ha sido fundamental para mantener el orden y cumplimiento en nuestra organización.',
      imagen: 'https://placehold.co/400x400/3f89d3/ffffff?text=CM'
    },
    {
      nombre: 'Ana Gómez',
      cargo: 'Gerente Financiera',
      empresa: 'Industrias ABC',
      comentario: 'Su profesionalismo y atención al detalle nos ha ayudado a mejorar significativamente nuestros procesos internos.',
      imagen: 'https://placehold.co/400x400/dc3545/ffffff?text=AG'
    },
    {
      nombre: 'Luis Ramírez',
      cargo: 'Presidente',
      empresa: 'Corporación DEF',
      comentario: 'Excelente servicio de revisoría fiscal, siempre atentos y proactivos en sus recomendaciones.',
      imagen: 'https://placehold.co/400x400/3f89d3/ffffff?text=LR'
    }
  ];

  constructor() { }

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('');
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  scrollToForm() {
    const formElement = document.getElementById('contacto');
    if (formElement) {
      const offset = 100;
      const elementPosition = formElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  ngOnInit() {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.testimonios.length;
    }, 5000);
  }
}
