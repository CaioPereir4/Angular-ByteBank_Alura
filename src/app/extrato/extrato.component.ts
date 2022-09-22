import { TransferenciaService } from './../services/transferencia.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Transferencia } from '../models/model.transferencia';
@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  transferencias: any[];
  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
    this.service.todas().subscribe((transferencias: Transferencia[])=>{
      console.table(transferencias);
      this.transferencias= transferencias;
    })
  }

}
