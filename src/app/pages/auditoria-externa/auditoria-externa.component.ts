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
  servicios = [
    {
      titulo: 'Auditoría de Estados Financieros',
      descripcion: 'Evaluación independiente y objetiva de la información financiera.',
      icono: 'fas fa-file-invoice',
      animationDelay: '0s'
    },
    {
      titulo: 'Auditoría de Cumplimiento',
      descripcion: 'Verificación del cumplimiento de normas y regulaciones externas.',
      icono: 'fas fa-shield-check',
      animationDelay: '0.2s'
    },
    {
      titulo: 'Auditoría Operativa',
      descripcion: 'Evaluación de la eficiencia y eficacia de los procesos operativos.',
      icono: 'fas fa-gears',
      animationDelay: '0.4s'
    },
    {
      titulo: 'Auditoría Especial',
      descripcion: 'Revisiones específicas según requerimientos particulares.',
      icono: 'fas fa-magnifying-glass-chart',
      animationDelay: '0.6s'
    }
  ];

  estadisticas = [
    {
      numero: '98%',
      texto: 'Satisfacción de clientes',
      icono: 'fas fa-smile'
    },
    {
      numero: '+500',
      texto: 'Auditorías realizadas',
      icono: 'fas fa-chart-line'
    },
    {
      numero: '25+',
      texto: 'Años de experiencia',
      icono: 'fas fa-calendar-check'
    }
  ];

  metodologia = [
    {
      fase: 'Planificación',
      descripcion: 'Desarrollo de estrategia y alcance',
      icono: 'fas fa-tasks'
    },
    {
      fase: 'Ejecución',
      descripcion: 'Aplicación de procedimientos',
      icono: 'fas fa-cogs'
    },
    {
      fase: 'Evaluación',
      descripcion: 'Análisis de resultados',
      icono: 'fas fa-chart-bar'
    },
    {
      fase: 'Informe',
      descripcion: 'Presentación de hallazgos',
      icono: 'fas fa-file-alt'
    }
  ];

  currentSlide = 0;
  testimonios = [
    {
      nombre: 'Carlos Rodríguez',
      cargo: 'Director Financiero',
      empresa: 'Industrias XYZ',
      comentario: 'El equipo de auditoría externa demostró un alto nivel de profesionalismo y conocimiento.',
      imagen: 'https://placehold.co/400x400/3f89d3/ffffff?text=CR'
    },
    {
      nombre: 'Ana Martínez',
      cargo: 'Gerente General',
      empresa: 'Comercial ABC',
      comentario: 'Los resultados de la auditoría nos ayudaron a mejorar significativamente nuestros procesos.',
      imagen: 'https://placehold.co/400x400/dc3545/ffffff?text=AM'
    },
    {
      nombre: 'Luis Pérez',
      cargo: 'Controller',
      empresa: 'Grupo Empresarial 123',
      comentario: 'Excelente servicio y atención a los detalles en todo el proceso de auditoría.',
      imagen: 'https://placehold.co/400x400/3f89d3/ffffff?text=LP'
    }
  ];

  scrollToForm() {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  ngOnInit() {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.testimonios.length;
    }, 5000);
  }
}
