import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';
import { ImageModule } from 'primeng/image';

interface Service {
  icon: string;
  title: string;
  description: string;
  link: string;
}

interface ProcessStep {
  icon: string;
  title: string;
  description: string;
}

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface Testimonial {
  name: string;
  position: string;
  company: string;
  message: string;
  avatar: string;
  rating: number;
}

@Component({
  selector: 'app-inicio',
  imports: [CommonModule, RouterModule, RouterLink, ImageModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent implements OnInit, OnDestroy {

  // Servicios principales especializados en insolvencia
  services: Service[] = [
    {
      icon: 'fas fa-balance-scale',
      title: 'Procesos de Insolvencia',
      description: 'Asesoría integral en procesos de reorganización empresarial, liquidación judicial y acuerdos de reestructuración.',
      link: '/servicios/insolvencia'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Acuerdos de Reestructuración',
      description: 'Negociación y estructuración de acuerdos con acreedores para la viabilidad empresarial.',
      link: '/servicios/reestructuracion'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Consultoría Financiera',
      description: 'Análisis de viabilidad, planes de negocio y estrategias de recuperación empresarial.',
      link: '/servicios/consultoria'
    },
    {
      icon: 'fas fa-file-contract',
      title: 'Asesoría Legal Concursal',
      description: 'Representación legal especializada en derecho concursal y procesos de insolvencia.',
      link: '/servicios/legal'
    }
  ];

  // Proceso de trabajo estructurado
  processSteps: ProcessStep[] = [
    {
      icon: 'fas fa-search',
      title: 'Diagnóstico Inicial',
      description: 'Evaluación completa de la situación financiera y legal de la empresa para determinar la mejor estrategia.'
    },
    {
      icon: 'fas fa-clipboard-list',
      title: 'Plan de Acción',
      description: 'Desarrollo de un plan detallado con alternativas viables según la situación específica de cada empresa.'
    },
    {
      icon: 'fas fa-users',
      title: 'Negociación',
      description: 'Mediación con acreedores, entidades financieras y demás partes involucradas en el proceso.'
    },
    {
      icon: 'fas fa-check-circle',
      title: 'Implementación',
      description: 'Ejecución del plan acordado con seguimiento continuo hasta la resolución exitosa del caso.'
    },
    {
      icon: 'fas fa-trophy',
      title: 'Resultados',
      description: 'Obtención de resultados exitosos y cumplimiento de los objetivos establecidos en el plan de reestructuración.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Seguimiento',
      description: 'Monitoreo continuo del desempeño empresarial y ajustes necesarios para garantizar la estabilidad a largo plazo.'
    }
  ];

  // Beneficios de nuestros servicios
  benefits: Benefit[] = [
    {
      icon: 'fas fa-shield-alt',
      title: 'Confidencialidad Total',
      description: 'Manejo discreto y confidencial de toda la información empresarial durante el proceso.'
    },
    {
      icon: 'fas fa-clock',
      title: 'Respuesta Inmediata',
      description: 'Atención urgente para situaciones críticas que requieren soluciones rápidas y efectivas.'
    },
    {
      icon: 'fas fa-dollar-sign',
      title: 'Optimización de Costos',
      description: 'Reducción de gastos legales y administrativos mediante procesos eficientes y especializados.'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Soluciones Innovadoras',
      description: 'Enfoques creativos y personalizados para cada situación empresarial específica.'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Mediación Efectiva',
      description: 'Facilitamos acuerdos beneficiosos entre todas las partes involucradas en el proceso.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Recuperación Empresarial',
      description: 'Enfoque en la viabilidad y continuidad del negocio cuando es posible y conveniente.'
    }
  ];

  // Testimonios de casos de éxito (inicialmente vacío para empresa nueva)
  testimonials: Testimonial[] = [
    // Se pueden agregar testimonios reales cuando la empresa tenga casos de éxito
  ];

  // Control de carrusel
  currentTestimonial = 0;
  testimonialInterval: any;

  constructor() { }

  ngOnInit(): void {
    if (this.testimonials.length > 0) {
      this.startTestimonialCarousel();
    }
    this.observeElements();
  }

  ngOnDestroy(): void {
    if (this.testimonialInterval) {
      clearInterval(this.testimonialInterval);
    }
  }

  // Carrusel de testimonios
  private startTestimonialCarousel(): void {
    this.testimonialInterval = setInterval(() => {
      this.nextTestimonial();
    }, 5000);
  }

  nextTestimonial(): void {
    this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonials.length;
  }

  prevTestimonial(): void {
    this.currentTestimonial = this.currentTestimonial === 0 
      ? this.testimonials.length - 1 
      : this.currentTestimonial - 1;
  }

  goToTestimonial(index: number): void {
    this.currentTestimonial = index;
  }

  // Observador de elementos para animaciones
  private observeElements(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observar elementos cuando el DOM esté listo
    setTimeout(() => {
      const elements = document.querySelectorAll('.service-card, .process-step, .benefit-card, .feature-item');
      elements.forEach(el => observer.observe(el));
    }, 100);
  }

  // Manejo de errores de imágenes
  onImageError(event: any): void {
    const img = event.target;
    img.src = 'https://via.placeholder.com/400x300/f8f9fa/6c757d?text=Imagen+no+disponible';
    img.alt = 'Imagen no disponible';
  }

  // Utilidad para mostrar estrellas en testimonios
  getStars(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i < rating ? 1 : 0);
  }

  // Scroll suave a secciones
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Scroll al formulario de contacto
  scrollToContact(event: Event): void {
    event.preventDefault();
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Scroll a la sección de servicios
  scrollToServices(event: Event): void {
    event.preventDefault();
    const element = document.getElementById('servicios');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
