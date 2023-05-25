import { Component,Input } from '@angular/core';

import {FormGroup,FormControl,Validators} from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-novo-servico',
  templateUrl: './novo-servico.component.html',
  styleUrls: ['./novo-servico.component.css']
})
export class NovoServicoComponent {
  @Input() btnText!:String;
  foods: Food[] = [
    {value: 'Serviços Dispoveis-0', viewValue: 'Serviços Dispoveis'},
    {value: 'motor-1', viewValue: 'motor'},
    {value: 'chassi-2', viewValue: 'shassi'},
    {value: 'lavagem-3', viewValue: 'lavagem'}
  ];

  foodControl = new FormControl(this.foods[2].value);
  form = new FormGroup({
    food: this.foodControl,
  });

  servicoForm!: FormGroup;

  constructor(){

  }

  ngOnInit (): void {
this.servicoForm = new FormGroup({


nome: new FormControl('',[Validators.required]),
servico: new FormControl(''),
placa: new FormControl(''),
})
  }
 enviarForm(){
  console.log("O formulario foi enviado.");
}

get nome(){

  return this.servicoForm.get('nome')!;
}

get servico(){

  return this.servicoForm.get('servico')!;
}

get placa(){

  return this.servicoForm.get('placa')!;

}
}
