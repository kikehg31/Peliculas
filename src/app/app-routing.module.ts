import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//importamos los componentes
import { AppComponent } from './app.component';
import { ShowComponent } from './components/show/show.component';

const routes: Routes = [
  { path: '', component:AppComponent },
  { path: 'show', component:ShowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
