import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-auditoria-externa',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './auditoria-externa.component.html',
  styleUrls: ['./auditoria-externa.component.scss'],
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
export class AuditoriaExternaComponent implements OnInit {
  currentSlide = 0;
  
  estadisticas = [
    {
      icono: 'fas fa-users',
      numero: '500+',
      texto: 'Clientes Satisfechos'
    },
    {
      icono: 'fas fa-chart-line',
      numero: '1000+',
      texto: 'Auditorías Realizadas'
    },
    {
      icono: 'fas fa-award',
      numero: '15+',
      texto: 'Años de Experiencia'
    }
  ];

  servicios = [
    {
      icono: 'fas fa-file-invoice',
      titulo: 'Auditoría Financiera',
      descripcion: 'Evaluación detallada de estados financieros y registros contables.',
      animationDelay: '0s'
    },
    {
      icono: 'fas fa-cogs',
      titulo: 'Auditoría Operativa',
      descripcion: 'Análisis de procesos y sistemas operativos internos.',
      animationDelay: '0.2s'
    },
    {
      icono: 'fas fa-shield-alt',
      titulo: 'Auditoría de Cumplimiento',
      descripcion: 'Verificación del cumplimiento normativo y regulatorio.',
      animationDelay: '0.4s'
    },
    {
      icono: 'fas fa-chart-bar',
      titulo: 'Auditoría de Gestión',
      descripcion: 'Evaluación de la eficiencia y eficacia organizacional.',
      animationDelay: '0.6s'
    }
  ];

  metodologia = [
    {
      fase: 'Planificación',
      descripcion: 'Desarrollo de un plan detallado y cronograma de auditoría.',
      icono: 'fas fa-clipboard-list'
    },
    {
      fase: 'Evaluación de Riesgos',
      descripcion: 'Identificación y análisis de áreas críticas y riesgos potenciales.',
      icono: 'fas fa-exclamation-triangle'
    },
    {
      fase: 'Ejecución',
      descripcion: 'Realización de procedimientos de auditoría y recopilación de evidencia.',
      icono: 'fas fa-tasks'
    },
    {
      fase: 'Análisis y Conclusiones',
      descripcion: 'Evaluación de hallazgos y formulación de conclusiones.',
      icono: 'fas fa-search'
    },
    {
      fase: 'Reporte Final',
      descripcion: 'Presentación de resultados y recomendaciones detalladas.',
      icono: 'fas fa-file-alt'
    }
  ];

  testimonios = [
    {
      nombre: 'Carlos Rodríguez',
      cargo: 'Director Financiero',
      empresa: 'Grupo Industrial XYZ',
      comentario: 'El equipo de Dialex Consultores demostró un alto nivel de profesionalismo y conocimiento en la auditoría de nuestra empresa.'
    },
    {
      nombre: 'Ana Martínez',
      cargo: 'Gerente General',
      empresa: 'Comercial ABC',
      comentario: 'La metodología de trabajo y el compromiso con la calidad nos ayudaron a mejorar significativamente nuestros procesos internos.'
    },
    {
      nombre: 'Luis Sánchez',
      cargo: 'Controller',
      empresa: 'Industrias DEF',
      comentario: 'Excelente servicio y atención personalizada. Los resultados superaron nuestras expectativas.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Iniciar el carrusel de testimonios
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.testimonios.length;
    }, 5000);
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  }

  scrollToForm() {
    const element = document.querySelector('app-contact-form');
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}
