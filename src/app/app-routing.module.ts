import { NovoClienteComponent } from './components/pages/novo-cliente/novo-cliente.component';
import { ClienteFormsComponent } from './components/cliente-forms/cliente-forms.component';
import { NovoServicoComponent } from './components/pages/novo-servico/novo-servico.component';
import { FuncionarioComponent } from './components/pages/funcionario/funcionario.component';
import { ProdutosComponent } from './components/pages/produtos/produtos.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StatusComponent } from './components/pages/status/status.component';



/*para que os componets possão ser mostrados na pagina principal do sistema
precisamos definir as notas dentro do app-routing por meio de imports */



/* imports padrão do angular*/
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: ' ', component: StatusComponent},
  {path: 'footer', component:FooterComponent},
  {path: 'header', component:HeaderComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'funcionarios', component:FuncionarioComponent},
  {path: 'novoservico', component: NovoServicoComponent},
  {path: 'clienteForm', component: ClienteFormsComponent},
  {path: 'novo-cliente', component: NovoClienteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
