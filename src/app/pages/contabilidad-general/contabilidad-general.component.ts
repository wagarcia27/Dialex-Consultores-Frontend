import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-contabilidad-general',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contabilidad-general.component.html',
  styleUrls: ['./contabilidad-general.component.scss'],
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
export class ContabilidadGeneralComponent implements OnInit {
  currentSlide = 0;
  
  estadisticas = [
    {
      icono: 'fas fa-book',
      numero: '1000+',
      texto: 'Registros Contables'
    },
    {
      icono: 'fas fa-chart-pie',
      numero: '500+',
      texto: 'Informes Financieros'
    },
    {
      icono: 'fas fa-award',
      numero: '15+',
      texto: 'Años de Experiencia'
    }
  ];

  servicios = [
    {
      icono: 'fas fa-file-invoice-dollar',
      titulo: 'Contabilidad Financiera',
      descripcion: 'Registro y procesamiento de transacciones financieras con precisión.',
      animationDelay: '0s'
    },
    {
      icono: 'fas fa-chart-line',
      titulo: 'Informes Financieros',
      descripcion: 'Elaboración de estados financieros y reportes gerenciales.',
      animationDelay: '0.2s'
    },
    {
      icono: 'fas fa-calculator',
      titulo: 'Análisis Contable',
      descripcion: 'Análisis detallado de la situación financiera y resultados.',
      animationDelay: '0.4s'
    },
    {
      icono: 'fas fa-balance-scale',
      titulo: 'Conciliaciones',
      descripcion: 'Conciliación de cuentas y ajustes contables necesarios.',
      animationDelay: '0.6s'
    }
  ];

  metodologia = [
    {
      fase: 'Recopilación',
      descripcion: 'Recolección y organización de documentación contable.',
      icono: 'fas fa-folder-open'
    },
    {
      fase: 'Procesamiento',
      descripcion: 'Registro sistemático de transacciones y operaciones.',
      icono: 'fas fa-cogs'
    },
    {
      fase: 'Análisis',
      descripcion: 'Evaluación detallada de la información financiera.',
      icono: 'fas fa-search'
    },
    {
      fase: 'Informes',
      descripcion: 'Generación de estados financieros y reportes.',
      icono: 'fas fa-file-alt'
    },
    {
      fase: 'Asesoría',
      descripcion: 'Recomendaciones para la toma de decisiones financieras.',
      icono: 'fas fa-handshake'
    }
  ];

  testimonios = [
    {
      nombre: 'Roberto Méndez',
      cargo: 'Director Financiero',
      empresa: 'Grupo Industrial ABC',
      comentario: 'El servicio de contabilidad de Dialex ha sido fundamental para mantener nuestras finanzas en orden y tomar decisiones informadas.',
      imagen: 'https://placehold.co/400x400/dc3545/ffffff?text=RM'
    },
    {
      nombre: 'Laura Torres',
      cargo: 'Gerente General',
      empresa: 'Comercial XYZ',
      comentario: 'La precisión y puntualidad en los informes financieros nos ha permitido mejorar significativamente nuestra gestión empresarial.',
      imagen: 'https://placehold.co/400x400/3f89d3/ffffff?text=LT'
    },
    {
      nombre: 'Carlos Ruiz',
      cargo: 'Propietario',
      empresa: 'Distribuidora DEF',
      comentario: 'Excelente servicio contable, siempre atentos a nuestras necesidades y con un equipo altamente profesional.',
      imagen: 'https://placehold.co/400x400/dc3545/ffffff?text=CR'
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
