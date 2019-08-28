import { Injectable } from '@angular/core';
import { Cliente } from './dados';

@Injectable()
export class ServicoService 
{

  private lista:Cliente[]=[];


  
  constructor() 
  { 
  }

  add(c:Cliente)
  {
    this.lista.push(c);
  }

  

}