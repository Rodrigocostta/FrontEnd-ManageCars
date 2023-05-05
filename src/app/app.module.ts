import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StatusComponent } from './components/pages/status/status.component';
import { NovoServicoComponent } from './components/pages/novo-servico/novo-servico.component';
import { ProdutosComponent } from './components/pages/produtos/produtos.component';
import { FuncionarioComponent } from './components/pages/funcionario/funcionario.component';
import { ClienteFormsComponent } from './components/cliente-forms/cliente-forms.component';
import { NovoClienteComponent } from './components/pages/novo-cliente/novo-cliente.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
        StatusComponent,
    NovoServicoComponent,
    ProdutosComponent,
    FuncionarioComponent,
    ClienteFormsComponent,
    NovoClienteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
