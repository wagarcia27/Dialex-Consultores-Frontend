import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button'; // ✅ Importar PrimeNG Button
import { InputTextModule } from 'primeng/inputtext';
import { InputTextarea } from 'primeng/inputtextarea'; // ✅ CORRECCIÓN: Importar InputTextarea directamente
import { CardModule } from 'primeng/card';
import { ReactiveFormsModule } from '@angular/forms'; // ✅ Importar ReactiveFormsModule
import { ContactoService } from '../../services/contacto.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';


@Component({
  selector: 'app-contact-form',
  imports: [CommonModule, ReactiveFormsModule, ToastModule, ButtonModule, InputTextModule, InputTextarea, CardModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {

  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactoService,
    private messageService: MessageService
  ) {
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      correoElectronico: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      asunto: ['', Validators.required],
      mensaje: ['']
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {


      const formData = {
        ...this.contactForm.value,
        fecha: new Date().toISOString().split('T')[0] // Obtiene la fecha en formato YYYY-MM-DD
      };


      this.contactService.sendContactForm(formData).subscribe({
        next: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Formulario enviado',
            detail: 'Su mensaje fue enviado con éxito, pronto será contactado.'
          });
          this.contactForm.reset(); // Limpia el formulario después del envío
        },
        error: () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Hubo un problema al enviar el formulario. Intente nuevamente.'
          });
        }
      });
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Formulario incompleto',
        detail: 'Por favor complete todos los campos obligatorios.'
      });
    }
  }

}
