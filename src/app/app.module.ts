import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';











import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StatusComponent } from './components/pages/status/status.component';
import { NovoServicoComponent } from './components/pages/novo-servico/novo-servico.component';
import { ClienteFormsComponent } from './components/cliente-forms/cliente-forms.component';
import { NovoClienteComponent } from './components/pages/novo-cliente/novo-cliente.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ListaClienteComponent } from './components/pages/lista-cliente/lista-cliente.component';
import { ListaServicoComponent } from './components/pages/lista-servico/lista-servico.component';
import { LancamentosComponent } from './components/pages/lancamentos/lancamentos.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ElementDialogComponent } from './components/shared/element-dialog/element-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { LancamentoComponent } from './components/shared/lancamento/lancamento.component';
import { InfoComponent } from './components/shared/info/info.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StatusComponent,
    NovoServicoComponent,
    ClienteFormsComponent,
    NovoClienteComponent,
    ListaClienteComponent,
    ListaServicoComponent,
    LancamentosComponent,
    ElementDialogComponent,
    LancamentoComponent,
    InfoComponent,



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
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
