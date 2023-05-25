import { NovoClienteComponent } from './components/pages/novo-cliente/novo-cliente.component';
import { ClienteFormsComponent } from './components/cliente-forms/cliente-forms.component';
import { NovoServicoComponent } from './components/pages/novo-servico/novo-servico.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StatusComponent } from './components/pages/status/status.component';
import { ListaClienteComponent } from './components/pages/lista-cliente/lista-cliente.component';
import { ListaServicoComponent } from './components/pages/lista-servico/lista-servico.component';
import { LancamentosComponent } from './components/pages/lancamentos/lancamentos.component';



/*para que os componets possão ser mostrados na pagina principal do sistema
precisamos definir as notas dentro do app-routing por meio de imports */



/* imports padrão do angular*/
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: StatusComponent},
  {path: 'footer', component:FooterComponent},
  {path: 'header', component:HeaderComponent},
  {path: 'novoservico', component: NovoServicoComponent},
  {path: 'clienteForm', component: ClienteFormsComponent},
  {path: 'novo-cliente', component: NovoClienteComponent},
  {path: 'lista-cliente', component: ListaClienteComponent},
  {path: 'lista-servico',component: ListaServicoComponent},
  {path: 'lancamento',component: LancamentosComponent},
  {path: '**',redirectTo:'',pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
