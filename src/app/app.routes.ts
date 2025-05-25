import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ContabilidadGeneralComponent } from './pages/contabilidad-general/contabilidad-general.component';
import { TributacionComponent } from './pages/tributacion/tributacion.component';
import { CostosIndustrialesComponent } from './pages/costos-industriales/costos-industriales.component';
import { RevisoriaFiscalComponent } from './pages/revisoria-fiscal/revisoria-fiscal.component';
import { AuditoriaInternaComponent } from './pages/auditoria-interna/auditoria-interna.component';
import { AuditoriaExternaComponent } from './pages/auditoria-externa/auditoria-externa.component';
import { PoliticasPrivacidadComponent } from './pages/politicas-privacidad/politicas-privacidad.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'contabilidad', component: ContabilidadGeneralComponent },
  { path: 'tributacion', component: TributacionComponent },
  { path: 'costos', component: CostosIndustrialesComponent },
  { path: 'revisoria', component: RevisoriaFiscalComponent },
  { path: 'auditoria-interna', component: AuditoriaInternaComponent },
  { path: 'auditoria-externa', component: AuditoriaExternaComponent },
  { path: 'politicas-privacidad', component: PoliticasPrivacidadComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];
