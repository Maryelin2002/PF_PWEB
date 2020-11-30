import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'medicos',
    loadChildren: () => import('./medicos/medicos.module').then( m => m.MedicosPageModule)
  },
  {
    path: 'paciente',
    loadChildren: () => import('./paciente/paciente.module').then( m => m.PacientePageModule)
  },
  {
    path: 'consulta',
    loadChildren: () => import('./consulta/consulta.module').then( m => m.ConsultaPageModule)
  },
  {
    path: 'zodiaco',
    loadChildren: () => import('./zodiaco/zodiaco.module').then( m => m.ZodiacoPageModule)
  },
  {
    path: 'fecha',
    loadChildren: () => import('./fecha/fecha.module').then( m => m.FechaPageModule)
  },
  {
    path: 'visitas',
    loadChildren: () => import('./visitas/visitas.module').then( m => m.VisitasPageModule)
  },  {
    path: 'updatepaciente',
    loadChildren: () => import('./updatepaciente/updatepaciente.module').then( m => m.UpdatepacientePageModule)
  },
  {
    path: 'updateconsulta',
    loadChildren: () => import('./updateconsulta/updateconsulta.module').then( m => m.UpdateconsultaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
