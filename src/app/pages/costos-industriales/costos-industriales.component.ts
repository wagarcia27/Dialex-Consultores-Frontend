import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-costos-industriales',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './costos-industriales.component.html',
  styleUrls: ['./costos-industriales.component.scss'],
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
export class CostosIndustrialesComponent implements OnInit {
  servicios = [
    {
      titulo: 'Sistemas de Costeo',
      descripcion: 'Implementación de sistemas de costeo adaptados a su industria.',
      icono: 'fas fa-industry',
      animationDelay: '0s'
    },
    {
      titulo: 'Análisis de Costos',
      descripcion: 'Evaluación detallada de costos para optimizar la rentabilidad.',
      icono: 'fas fa-chart-line',
      animationDelay: '0.2s'
    },
    {
      titulo: 'Control de Inventarios',
      descripcion: 'Gestión y control eficiente de inventarios y materias primas.',
      icono: 'fas fa-boxes',
      animationDelay: '0.4s'
    },
    {
      titulo: 'Presupuestos',
      descripcion: 'Elaboración y seguimiento de presupuestos industriales.',
      icono: 'fas fa-calculator',
      animationDelay: '0.6s'
    }
  ];

  estadisticas = [
    {
      numero: '95%',
      texto: 'Satisfacción de clientes',
      icono: 'fas fa-smile'
    },
    {
      numero: '+300',
      texto: 'Proyectos completados',
      icono: 'fas fa-industry'
    },
    {
      numero: '18+',
      texto: 'Años de experiencia',
      icono: 'fas fa-star'
    }
  ];

  currentSlide = 0;

  testimonios = [
    {
      nombre: 'Carlos Rodríguez',
      cargo: 'Director de Producción',
      empresa: 'Industrias XYZ',
      comentario: 'La implementación del sistema de costos industriales mejoró significativamente nuestra eficiencia operativa.',
      imagen: 'https://placehold.co/400x400/3f89d3/ffffff?text=CR'
    },
    {
      nombre: 'Ana Martínez',
      cargo: 'Gerente de Operaciones',
      empresa: 'Manufacturas ABC',
      comentario: 'El control de costos nos ha permitido optimizar recursos y aumentar la rentabilidad de manera notable.',
      imagen: 'https://placehold.co/400x400/dc3545/ffffff?text=AM'
    },
    {
      nombre: 'Luis Sánchez',
      cargo: 'Controller Financiero',
      empresa: 'Grupo Industrial DEF',
      comentario: 'La precisión en el cálculo de costos nos ha dado una ventaja competitiva en el mercado.',
      imagen: 'https://placehold.co/400x400/3f89d3/ffffff?text=LS'
    }
  ];

  metodologia = [
    {
      fase: 'Diagnóstico',
      descripcion: 'Evaluación inicial de procesos y sistemas de costos',
      icono: 'fas fa-search-dollar'
    },
    {
      fase: 'Diseño',
      descripcion: 'Desarrollo de estructura de costos personalizada',
      icono: 'fas fa-drafting-compass'
    },
    {
      fase: 'Implementación',
      descripcion: 'Puesta en marcha del sistema de costos',
      icono: 'fas fa-cogs'
    },
    {
      fase: 'Seguimiento',
      descripcion: 'Monitoreo y ajustes continuos',
      icono: 'fas fa-chart-line'
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
