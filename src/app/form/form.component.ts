import { Component, OnInit } from '@angular/core';
import { Cliente } from '../dados';
import { ServicoService } from '../servico.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private cliente: Cliente = new Cliente();

  constructor(private s:ServicoService) 
  { 
  }

  ngOnInit() 
  {
  }

  salvar():void 
  {
    this.s.add(this.cliente);
  }
  
  limpar():void
  {
    this.cliente = new Cliente();
  }

}