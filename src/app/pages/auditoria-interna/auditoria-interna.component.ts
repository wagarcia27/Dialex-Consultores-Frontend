import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-auditoria-interna',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './auditoria-interna.component.html',
  styleUrls: ['./auditoria-interna.component.scss'],
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
export class AuditoriaInternaComponent implements OnInit {
  currentSlide = 0;
  
  estadisticas = [
    {
      icono: 'fas fa-shield-alt',
      numero: '300+',
      texto: 'Controles Implementados'
    },
    {
      icono: 'fas fa-chart-line',
      numero: '800+',
      texto: 'Procesos Optimizados'
    },
    {
      icono: 'fas fa-award',
      numero: '15+',
      texto: 'Años de Experiencia'
    }
  ];

  servicios = [
    {
      icono: 'fas fa-search',
      titulo: 'Evaluación de Riesgos',
      descripcion: 'Identificación y evaluación de riesgos operativos y estratégicos.',
      animationDelay: '0s'
    },
    {
      icono: 'fas fa-cogs',
      titulo: 'Control Interno',
      descripcion: 'Diseño e implementación de sistemas de control interno efectivos.',
      animationDelay: '0.2s'
    },
    {
      icono: 'fas fa-chart-bar',
      titulo: 'Auditoría de Procesos',
      descripcion: 'Evaluación y mejora de procesos operativos y administrativos.',
      animationDelay: '0.4s'
    },
    {
      icono: 'fas fa-file-alt',
      titulo: 'Informes de Gestión',
      descripcion: 'Elaboración de informes detallados con recomendaciones de mejora.',
      animationDelay: '0.6s'
    }
  ];

  metodologia = [
    {
      fase: 'Diagnóstico Inicial',
      descripcion: 'Evaluación preliminar de la estructura y procesos internos.',
      icono: 'fas fa-clipboard-list'
    },
    {
      fase: 'Identificación de Riesgos',
      descripcion: 'Análisis detallado de áreas críticas y puntos de control.',
      icono: 'fas fa-exclamation-triangle'
    },
    {
      fase: 'Diseño de Controles',
      descripcion: 'Desarrollo de procedimientos y políticas de control interno.',
      icono: 'fas fa-tasks'
    },
    {
      fase: 'Implementación',
      descripcion: 'Puesta en marcha de los controles y capacitación del personal.',
      icono: 'fas fa-cogs'
    },
    {
      fase: 'Monitoreo Continuo',
      descripcion: 'Seguimiento y evaluación permanente de la efectividad de los controles.',
      icono: 'fas fa-chart-line'
    }
  ];

  testimonios = [
    {
      nombre: 'María López',
      cargo: 'Gerente Administrativa',
      empresa: 'Industrias ABC',
      comentario: 'La implementación del sistema de control interno mejoró significativamente nuestros procesos operativos.'
    },
    {
      nombre: 'Juan Pérez',
      cargo: 'Director de Operaciones',
      empresa: 'Grupo XYZ',
      comentario: 'El equipo de Dialex nos ayudó a identificar y mitigar riesgos críticos en nuestras operaciones.'
    },
    {
      nombre: 'Ana García',
      cargo: 'Gerente de Riesgos',
      empresa: 'Corporación DEF',
      comentario: 'Excelente metodología y profesionalismo en la implementación de controles internos.'
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
