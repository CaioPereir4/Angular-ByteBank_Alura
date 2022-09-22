import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from "@angular/core";
import { Transferencia } from '../models/model.transferencia';
import { Router } from '@angular/router';

@Component(
    {
        selector:'nova-transferencia',
        templateUrl:'./nova-transferencia.component.html',
        styleUrls:['./nova-transferencia.component.css']
    }
)


export class NovatransferenciaComponent{

    @Output() aoTransferir = new EventEmitter<any>();

    valor:number;
    destino:number;
    constructor(private service: TransferenciaService, private router: Router){

    }



    transferir(){
        console.log("Solicita nova transferencia");
        const valorEmitir: Transferencia =  {valor: this.valor,destino: this.destino}
        this.service.adicionar(valorEmitir).subscribe(resultado =>{
          this.router.navigateByUrl('extrato')
          console.log(resultado);
          this.limparCampos();
        },error =>{
          console.error(error);
        })
        this.limparCampos();

    }

    limparCampos(){
        this.valor = 0;
        this.destino = 0;
    }
}
