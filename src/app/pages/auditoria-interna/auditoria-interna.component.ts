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
  servicios = [
    {
      titulo: 'Control Interno',
      descripcion: 'Evaluación y mejora de los sistemas de control interno.',
      icono: 'fas fa-shield-alt',
      animationDelay: '0s'
    },
    {
      titulo: 'Gestión de Riesgos',
      descripcion: 'Identificación y evaluación de riesgos operativos y estratégicos.',
      icono: 'fas fa-chart-line',
      animationDelay: '0.2s'
    },
    {
      titulo: 'Procesos y Eficiencia',
      descripcion: 'Optimización de procesos y mejora continua.',
      icono: 'fas fa-cogs',
      animationDelay: '0.4s'
    },
    {
      titulo: 'Cumplimiento Interno',
      descripcion: 'Verificación del cumplimiento de políticas y procedimientos.',
      icono: 'fas fa-check-double',
      animationDelay: '0.6s'
    }
  ];

  estadisticas = [
    {
      numero: '95%',
      texto: 'Mejora en procesos',
      icono: 'fas fa-arrow-trend-up'
    },
    {
      numero: '+300',
      texto: 'Controles implementados',
      icono: 'fas fa-shield-check'
    },
    {
      numero: '30+',
      texto: 'Años de experiencia',
      icono: 'fas fa-star'
    }
  ];

  metodologia = [
    {
      fase: 'Diagnóstico',
      descripcion: 'Evaluación inicial de controles y procesos',
      icono: 'fas fa-magnifying-glass-chart'
    },
    {
      fase: 'Análisis',
      descripcion: 'Identificación de áreas de mejora',
      icono: 'fas fa-chart-pie'
    },
    {
      fase: 'Implementación',
      descripcion: 'Desarrollo de soluciones y controles',
      icono: 'fas fa-gear'
    },
    {
      fase: 'Seguimiento',
      descripcion: 'Monitoreo continuo y ajustes',
      icono: 'fas fa-chart-line'
    }
  ];

  currentSlide = 0;
  testimonios = [
    {
      nombre: 'María González',
      cargo: 'Gerente de Operaciones',
      empresa: 'Grupo Industrial ABC',
      comentario: 'La auditoría interna nos ayudó a identificar y corregir ineficiencias operativas críticas.',
      imagen: 'https://placehold.co/400x400/3f89d3/ffffff?text=MG'
    },
    {
      nombre: 'Roberto Sánchez',
      cargo: 'Director de Cumplimiento',
      empresa: 'Corporación XYZ',
      comentario: 'Excelente trabajo en la implementación de controles internos y gestión de riesgos.',
      imagen: 'https://placehold.co/400x400/dc3545/ffffff?text=RS'
    },
    {
      nombre: 'Patricia Mendoza',
      cargo: 'CFO',
      empresa: 'Empresas 123',
      comentario: 'La metodología de trabajo y el seguimiento continuo superaron nuestras expectativas.',
      imagen: 'https://placehold.co/400x400/3f89d3/ffffff?text=PM'
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

  ngOnInit() {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.testimonios.length;
    }, 5000);
  }
}
