import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'nombre',
    loadChildren: () => import('./nombre/nombre.module').then( m => m.NombrePageModule)
  },
  {
    path: 'post',
    loadChildren: () => import('./paginas/post/post.module').then( m => m.PostPageModule)
  },
  {
    path: 'post-detalle/:idCine',
    loadChildren: () => import('./paginas/post-detalle/post-detalle.module').then( m => m.PostDetallePageModule)
  },
  {
    path: 'empleado-formulario',
    loadChildren: () => import('./paginas/empleado-formulario/empleado-formulario.module').then( m => m.EmpleadoFormularioPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
