import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './modules/auth/auth.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: '',
        loadChildren: './modules/auth/auth.module#AuthModule'
      }
    ]
  },
  {  path: '**', redirectTo: 'auth/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
