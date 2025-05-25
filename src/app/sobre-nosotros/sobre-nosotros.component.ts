import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TeamMember {
  name: string;
  position: string;
  description: string;
  image: string;
  credentials: string[];
  linkedin?: string;
  email?: string;
}

interface GrowthMilestone {
  date: string;
  title: string;
  description: string;
  icon: string;
}

interface ApproachStep {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-sobre-nosotros',
  imports: [CommonModule],
  templateUrl: './sobre-nosotros.component.html',
  styleUrl: './sobre-nosotros.component.scss'
})
export class SobreNosotrosComponent implements OnInit {
  
  // Año de fundación y año actual
  foundingYear = 2023;
  currentYear = new Date().getFullYear();

  // Datos del equipo fundador (realistas para una empresa nueva)
  teamMembers: TeamMember[] = [
    {
      name: 'Carlos García',
      position: 'Socio Fundador & Director General',
      description: 'Contador Público con 8 años de experiencia en firmas reconocidas. Especialista en consultoría financiera para PYMES y empresas en crecimiento.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      credentials: ['CP', 'Especialista en NIIF'],
      linkedin: 'https://linkedin.com/in/carlos-garcia-dialex',
      email: 'carlos.garcia@dialexconsultores.com'
    },
    {
      name: 'María Rodríguez',
      position: 'Socia Fundadora & Directora de Auditoría',
      description: 'Contadora Pública con experiencia en auditoría externa e interna. Experta en implementación de controles internos y cumplimiento normativo.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      credentials: ['CP', 'Auditor Interno'],
      linkedin: 'https://linkedin.com/in/maria-rodriguez-dialex',
      email: 'maria.rodriguez@dialexconsultores.com'
    },
    {
      name: 'Luis Martínez',
      position: 'Socio Fundador & Director Tributario',
      description: 'Contador Público especializado en legislación fiscal y planificación tributaria. Experiencia en asesoría fiscal para diversos sectores económicos.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      credentials: ['CP', 'Especialista Tributario'],
      linkedin: 'https://linkedin.com/in/luis-martinez-dialex',
      email: 'luis.martinez@dialexconsultores.com'
    }
  ];

  // Hitos de crecimiento (realistas para una empresa nueva)
  growthMilestones: GrowthMilestone[] = [
    {
      date: 'Enero 2023',
      title: 'Fundación de Dialex Consultores',
      description: 'Tres profesionales con experiencia previa deciden unirse para crear una consultora moderna y ágil.',
      icon: 'fas fa-rocket'
    },
    {
      date: 'Marzo 2023',
      title: 'Primeros Clientes',
      description: 'Conseguimos nuestros primeros 5 clientes, validando nuestro enfoque y propuesta de valor.',
      icon: 'fas fa-handshake'
    },
    {
      date: 'Junio 2023',
      title: 'Implementación Tecnológica',
      description: 'Adoptamos herramientas digitales avanzadas para optimizar nuestros procesos y mejorar la experiencia del cliente.',
      icon: 'fas fa-laptop-code'
    },
    {
      date: 'Septiembre 2023',
      title: 'Expansión de Servicios',
      description: 'Ampliamos nuestra oferta incluyendo consultoría en transformación digital y análisis financiero avanzado.',
      icon: 'fas fa-chart-line'
    },
    {
      date: 'Diciembre 2023',
      title: 'Crecimiento Sostenido',
      description: 'Cerramos el primer año con 25+ clientes satisfechos y un equipo consolidado de profesionales.',
      icon: 'fas fa-trophy'
    },
    {
      date: 'Presente',
      title: 'Consolidación y Futuro',
      description: 'Continuamos creciendo de manera sostenible, enfocados en la calidad del servicio y la innovación constante.',
      icon: 'fas fa-star'
    }
  ];

  // Pasos de nuestro enfoque de trabajo
  approachSteps: ApproachStep[] = [
    {
      title: 'Diagnóstico',
      description: 'Analizamos tu situación actual y identificamos oportunidades de mejora específicas para tu empresa.',
      icon: 'fas fa-search'
    },
    {
      title: 'Planificación',
      description: 'Diseñamos una estrategia personalizada que se adapte a tus objetivos y recursos disponibles.',
      icon: 'fas fa-clipboard-list'
    },
    {
      title: 'Implementación',
      description: 'Ejecutamos las soluciones de manera ágil, manteniendo comunicación constante contigo.',
      icon: 'fas fa-cogs'
    },
    {
      title: 'Seguimiento',
      description: 'Monitoreamos los resultados y ajustamos la estrategia según sea necesario para asegurar el éxito.',
      icon: 'fas fa-chart-bar'
    }
  ];

  // Estadísticas realistas para una empresa nueva
  stats = {
    clients: { current: 0, target: 25, suffix: '+' },
    commitment: { current: 0, target: 100, suffix: '%' }
  };

  constructor() { }

  ngOnInit(): void {
    this.animateStats();
    this.observeElements();
  }

  // Animación de estadísticas
  private animateStats(): void {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    // Animar clientes
    this.animateNumber('clients', stepDuration, steps);
    
    // Animar compromiso (con delay)
    setTimeout(() => {
      this.animateNumber('commitment', stepDuration, steps);
    }, 800);
  }

  private animateNumber(statKey: keyof typeof this.stats, stepDuration: number, totalSteps: number): void {
    const stat = this.stats[statKey];
    const increment = stat.target / totalSteps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      
      const progress = currentStep / totalSteps;
      const easedProgress = this.easeOutQuart(progress);
      stat.current = Math.min(Math.round(stat.target * easedProgress), stat.target);
      
      if (currentStep >= totalSteps) {
        clearInterval(timer);
        stat.current = stat.target;
      }
    }, stepDuration);
  }

  private easeOutQuart(t: number): number {
    return 1 - Math.pow(1 - t, 4);
  }

  // Observer para animaciones al hacer scroll
  private observeElements(): void {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
      });

      setTimeout(() => {
        const elementsToObserve = document.querySelectorAll(
          '.mvv-card, .team-card, .feature-item, .approach-card, .timeline-item'
        );
        elementsToObserve.forEach(el => observer.observe(el));
      }, 100);
    }
  }

  // Manejo de errores de imagen
  onImageError(event: any): void {
    const img = event.target;
    img.src = 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80';
  }

  // Navegación a secciones
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  // Abrir enlaces externos
  openExternalLink(url: string): void {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }

  // Obtener año actual
  getCurrentYear(): number {
    return this.currentYear;
  }

  // Obtener años de experiencia
  getYearsOfExperience(): number {
    return this.currentYear - this.foundingYear;
  }

  // Scroll al formulario de contacto
  scrollToContactForm(): void {
    // Buscar el formulario de contacto en la página
    const contactSection = document.querySelector('.contact-form-wrapper') || 
                          document.querySelector('app-contact-form') ||
                          document.querySelector('.contact-cta') ||
                          document.querySelector('[class*="contact"]') ||
                          document.querySelector('[class*="form"]');
    
    if (contactSection) {
      const headerOffset = 100;
      const elementPosition = contactSection.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      // Si no encuentra el formulario en la página, scroll al final
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    }
  }
}
