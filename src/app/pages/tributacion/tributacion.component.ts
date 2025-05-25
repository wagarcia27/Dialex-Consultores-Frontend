import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-tributacion',
  standalone: true,
  imports: [CommonModule, RouterModule],
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
export class TributacionComponent implements OnInit {
  servicios = [
    {
      titulo: 'Planeación Tributaria',
      descripcion: 'Estrategias para optimizar la carga tributaria de manera legal y eficiente.',
      icono: 'fas fa-calculator',
      animationDelay: '0s'
    },
    {
      titulo: 'Declaraciones Tributarias',
      descripcion: 'Preparación y presentación de todas las declaraciones fiscales requeridas.',
      icono: 'fas fa-file-invoice-dollar',
      animationDelay: '0.2s'
    },
    {
      titulo: 'Consultoría Fiscal',
      descripcion: 'Asesoramiento especializado en normativa tributaria nacional e internacional.',
      icono: 'fas fa-balance-scale',
      animationDelay: '0.4s'
    },
    {
      titulo: 'Representación ante la DIAN',
      descripcion: 'Gestión y defensa de sus intereses ante las autoridades fiscales.',
      icono: 'fas fa-building-columns',
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
      numero: '+1000',
      texto: 'Declaraciones presentadas',
      icono: 'fas fa-file-signature'
    },
    {
      numero: '20+',
      texto: 'Años de experiencia',
      icono: 'fas fa-star'
    }
  ];

  metodologia = [
    {
      fase: 'Diagnóstico',
      descripcion: 'Evaluación de la situación fiscal',
      icono: 'fas fa-magnifying-glass-chart'
    },
    {
      fase: 'Planificación',
      descripcion: 'Desarrollo de estrategias fiscales',
      icono: 'fas fa-clipboard-list'
    },
    {
      fase: 'Implementación',
      descripcion: 'Ejecución de estrategias tributarias',
      icono: 'fas fa-gear'
    },
    {
      fase: 'Seguimiento',
      descripcion: 'Monitoreo y actualización continua',
      icono: 'fas fa-chart-line'
    }
  ];

  currentSlide = 0;
  testimonios = [
    {
      nombre: 'Juan Pérez',
      cargo: 'Director Financiero',
      empresa: 'Grupo Empresarial XYZ',
      comentario: 'La asesoría tributaria nos ha permitido optimizar significativamente nuestra carga fiscal.',
      imagen: 'https://placehold.co/400x400/3f89d3/ffffff?text=JP'
    },
    {
      nombre: 'María López',
      cargo: 'Gerente Administrativa',
      empresa: 'Industrias ABC',
      comentario: 'Excelente servicio y profesionalismo en la gestión de nuestros asuntos tributarios.',
      imagen: 'https://placehold.co/400x400/dc3545/ffffff?text=ML'
    },
    {
      nombre: 'Carlos Ruiz',
      cargo: 'CEO',
      empresa: 'Comercial 123',
      comentario: 'Su experiencia en planeación tributaria ha sido fundamental para nuestro crecimiento.',
      imagen: 'https://placehold.co/400x400/3f89d3/ffffff?text=CR'
    }
  ];

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('');
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.testimonios.length - 1 : this.currentSlide - 1;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.testimonios.length;
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
