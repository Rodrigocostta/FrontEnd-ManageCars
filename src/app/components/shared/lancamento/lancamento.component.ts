import { Component,Inject,OnInit } from '@angular/core';
import { ListarLancamneto } from '../../pages/lista-servico/lista-servico.component';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Lancamentos } from '../../pages/lancamentos/lancamentos.component';

@Component({
  selector: 'app-lancamento',
  templateUrl: './lancamento.component.html',
  styleUrls: ['./lancamento.component.css']
})

  export class LancamentoComponent implements OnInit {

      element!: Lancamentos;
      option!: boolean;


      constructor(
        public dialogRef: MatDialogRef<Lancamentos>,
        @Inject(MAT_DIALOG_DATA) public data: Lancamentos) {}


      ngOnInit():void{

        if (this.data.id!= null){
          this.option = true;
        }else{
          this.option = false;


        }

      }
      onCancel(): void {
        this.dialogRef.close();
      }
      }
