
import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
template: ` 
        <h1>{{titulo}}</h1>

        <button (click)="acumular1(+1 )" >+1 </button>

        <span> {{ numero }} </span>

        <button (click)="acumular1(-1 )">-1  </button>


        <h3>La base es: <strong> base </strong></h3>

        <button (click)="acumular2( +5 )">+5 </button>

        <span> {{ base }} </span>

        <button (click)="acumular2(-5 )">-5 </button>


 <!-- esto es del html siver pero yo quise poner 
los sos juntos entonces no me servia este metodo pero si solo 
fura para una valor sirve sin problema 
<h3>La base es: <strong> base </strong></h3>

<button (click)="acumular( +5 )">+{{ base }} </button>

<span> {{ numero }} </span>

<button (click)="acumular(-5 )">- {{ base }}</button> -->



`
    
})

export class ContadorComponent{

    
  titulo: string = 'Contador app';
  numero:number = 10 ;
  base : number= 5;


  acumular1 (valor: number  ){
    this.numero+= valor;
    
  }

  acumular2 (valor2:  number ){
    this.base += valor2 ;
  }
   

 //este meto es bueno peor usa mas lines de codigo
  //es mas rentable el de la parte de arriba.
 /* sumar(){
   this.numero += 1 ;
  }

  restar(){
    this.numero -= 1 ;
   }*/ 
  


}