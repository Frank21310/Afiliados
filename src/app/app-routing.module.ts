import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'formulario', loadChildren: () => import('./pages/formulario/formulario.module').then(m => m.FormularioModule) },
  { path: 'consulta', loadChildren: () => import('./pages/consulta/consulta.module').then(m => m.ConsultaModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
