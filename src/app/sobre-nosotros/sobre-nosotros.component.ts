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

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface Certification {
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
  
  // Datos del equipo directivo
  teamMembers: TeamMember[] = [
    {
      name: 'Carlos García Mendoza',
      position: 'Director General & Fundador',
      description: 'CPA con más de 20 años de experiencia en consultoría financiera, auditoría y gestión empresarial. Especialista en reestructuración corporativa y planificación estratégica.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      credentials: ['CPA', 'MBA', 'CFE'],
      linkedin: 'https://linkedin.com/in/carlos-garcia-dialex',
      email: 'carlos.garcia@dialexconsultores.com'
    },
    {
      name: 'María Rodríguez Silva',
      position: 'Directora de Auditoría & Compliance',
      description: 'Especialista en auditoría externa e interna con certificaciones internacionales. Experta en sistemas de control interno y cumplimiento normativo para empresas multinacionales.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      credentials: ['CIA', 'CPA', 'CISA'],
      linkedin: 'https://linkedin.com/in/maria-rodriguez-dialex',
      email: 'maria.rodriguez@dialexconsultores.com'
    },
    {
      name: 'Luis Martínez Torres',
      position: 'Director Tributario & Legal',
      description: 'Experto en legislación fiscal nacional e internacional, planificación tributaria estratégica y asesoría legal empresarial. Especialista en optimización fiscal para PYMES y grandes corporaciones.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      credentials: ['LLM', 'CPA', 'MTI'],
      linkedin: 'https://linkedin.com/in/luis-martinez-dialex',
      email: 'luis.martinez@dialexconsultores.com'
    }
  ];

  // Timeline detallado de la empresa
  timelineEvents: TimelineEvent[] = [
    {
      year: '2009',
      title: 'Fundación de Dialex Consultores',
      description: 'Inicio de operaciones con un equipo fundador de 3 profesionales especializados en contabilidad general y auditoría, estableciendo las bases de lo que sería una empresa líder en el sector.'
    },
    {
      year: '2012',
      title: 'Expansión de Servicios Especializados',
      description: 'Incorporación de servicios de auditoría externa, consultoría tributaria avanzada y asesoría financiera estratégica. Apertura de segunda oficina y crecimiento del equipo a 8 profesionales.'
    },
    {
      year: '2015',
      title: 'Certificación ISO 9001:2015',
      description: 'Obtención de la prestigiosa certificación ISO 9001:2015 en Sistemas de Gestión de Calidad, consolidando nuestro compromiso con la excelencia y mejora continua en todos nuestros procesos.'
    },
    {
      year: '2018',
      title: 'Transformación Digital',
      description: 'Implementación de plataformas tecnológicas de vanguardia para optimizar la gestión de procesos, incluyendo sistemas de gestión documental digital y herramientas de análisis financiero avanzado.'
    },
    {
      year: '2021',
      title: 'Reconocimiento a la Excelencia',
      description: 'Premio a la Excelencia en Servicios Profesionales otorgado por la Cámara de Comercio Regional. Expansión a servicios de consultoría en transformación digital empresarial.'
    },
    {
      year: '2024',
      title: 'Liderazgo Consolidado',
      description: 'Más de 500 clientes satisfechos, equipo de 25 profesionales especializados y reconocimiento como una de las consultoras más confiables de la región. Expansión a mercados internacionales.'
    }
  ];

  // Certificaciones y reconocimientos
  certifications: Certification[] = [
    {
      title: 'ISO 9001:2015',
      description: 'Certificación Internacional en Sistemas de Gestión de Calidad que garantiza la excelencia en nuestros procesos',
      icon: 'fas fa-certificate'
    },
    {
      title: 'CPA Certification',
      description: 'Contadores Públicos Autorizados certificados por organismos nacionales e internacionales reconocidos',
      icon: 'fas fa-award'
    },
    {
      title: 'IFAC Member',
      description: 'Miembro activo de la Federación Internacional de Contadores, garantizando estándares globales de calidad',
      icon: 'fas fa-medal'
    },
    {
      title: 'Excellence Award 2023',
      description: 'Premio a la Excelencia en Servicios Profesionales otorgado por la Cámara de Comercio Regional',
      icon: 'fas fa-star'
    }
  ];

  // Estadísticas animadas
  stats = {
    experience: { current: 0, target: 15, suffix: '+' },
    clients: { current: 0, target: 500, suffix: '+' },
    commitment: { current: 0, target: 100, suffix: '%' }
  };

  constructor() { }

  ngOnInit(): void {
    this.animateStats();
    this.observeElements();
  }

  // Animación de estadísticas con efecto contador
  private animateStats(): void {
    const duration = 2500; // 2.5 segundos para una animación más suave
    const steps = 80; // Más pasos para mayor suavidad
    const stepDuration = duration / steps;

    // Animar experiencia
    this.animateNumber('experience', stepDuration, steps);
    
    // Animar clientes (con delay escalonado)
    setTimeout(() => {
      this.animateNumber('clients', stepDuration, steps);
    }, 600);
    
    // Animar compromiso (con delay escalonado)
    setTimeout(() => {
      this.animateNumber('commitment', stepDuration, steps);
    }, 1200);
  }

  private animateNumber(statKey: keyof typeof this.stats, stepDuration: number, totalSteps: number): void {
    const stat = this.stats[statKey];
    const increment = stat.target / totalSteps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      
      // Usar una función de easing para hacer la animación más natural
      const progress = currentStep / totalSteps;
      const easedProgress = this.easeOutQuart(progress);
      stat.current = Math.min(Math.round(stat.target * easedProgress), stat.target);
      
      if (currentStep >= totalSteps) {
        clearInterval(timer);
        stat.current = stat.target;
      }
    }, stepDuration);
  }

  // Función de easing para animaciones más naturales
  private easeOutQuart(t: number): number {
    return 1 - Math.pow(1 - t, 4);
  }

  // Observer mejorado para animaciones al hacer scroll
  private observeElements(): void {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            // Opcional: dejar de observar el elemento una vez animado
            // observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.15, // Activar cuando el 15% del elemento sea visible
        rootMargin: '0px 0px -80px 0px' // Margen para activar la animación antes
      });

      // Observar elementos después de asegurar que el DOM esté listo
      setTimeout(() => {
        const elementsToObserve = document.querySelectorAll(
          '.mvv-card, .team-card, .certification-card, .timeline-item, .feature-item'
        );
        elementsToObserve.forEach(el => observer.observe(el));
      }, 150);
    }
  }

  // Método mejorado para manejar errores de carga de imágenes
  onImageError(event: any): void {
    const target = event.target;
    target.src = 'https://via.placeholder.com/400x400/667eea/ffffff?text=Dialex+Consultores';
    target.alt = 'Imagen no disponible - Dialex Consultores';
    
    // Agregar clase para estilos específicos de imagen de error
    target.classList.add('image-error');
  }

  // Método para scroll suave a secciones específicas
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100; // Offset para el header fijo
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  // Método mejorado para abrir enlaces externos
  openExternalLink(url: string): void {
    if (url && url !== '#') {
      // Validar que sea una URL válida
      try {
        new URL(url);
        window.open(url, '_blank', 'noopener,noreferrer');
      } catch (error) {
        console.warn('URL inválida:', url);
        // Opcional: mostrar mensaje al usuario
      }
    }
  }

  // Método para obtener el año actual
  getCurrentYear(): number {
    return new Date().getFullYear();
  }

  // Método para calcular años de experiencia dinámicamente
  getYearsOfExperience(): number {
    const foundingYear = 2009;
    return this.getCurrentYear() - foundingYear;
  }
}
