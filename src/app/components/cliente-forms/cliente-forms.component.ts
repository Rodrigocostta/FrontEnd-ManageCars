import { Component, Input } from '@angular/core';


/*Importação importante para  o funcionamento do formúlario*/
import {FormGroup,FormControl,Validators} from '@angular/forms';


@Component({
  selector: 'app-cliente-forms',
  templateUrl: './cliente-forms.component.html',
  styleUrls: ['./cliente-forms.component.css']
})
export class ClienteFormsComponent {
  @Input() btnText!:String;

  clienteForm!: FormGroup;

  constructor(){

  }

  ngOnInit (): void {
this.clienteForm = new FormGroup({

id: new FormControl (''),
cpf: new FormControl('',[Validators.required]),
nome: new FormControl('', [Validators.required]),
numero: new FormControl('', [Validators.required]),
marca: new FormControl('', [Validators.required]),
modelo: new FormControl('', [Validators.required]),
placa: new FormControl('', [Validators.required]),

})
  }
 enviarForm(){
  console.log("O formulario foi enviado.");
}

get cpf(){
  return this.clienteForm.get('cpf')!;
}

get nome(){

  return this.clienteForm.get('nome')!;
}
get numero(){

  return this.clienteForm.get('numero')!;
}

get marca(){

  return this.clienteForm.get('marca')!;
}

get modelo(){

  return this.clienteForm.get('modelo')!;
}

get placa(){

  return this.clienteForm.get('placa')!;
}
}

