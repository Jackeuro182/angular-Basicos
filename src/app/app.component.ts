import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //templateUrl: './heroes/heroe/heroe.component.html',   sepued eusar si no quiere jalar lo que tienes en el html de la carpeta
})
export class AppComponent {
 //************************************************** */
 /* public titulo: string = 'Contador app';
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
  sumar(){
   this.numero += 1 ;
  }

  restar(){
    this.numero -= 1 ;
   }
   
 esto es del html siver pero yo quise poner 
los sos juntos entonces no me servia este metodo pero si solo 
fura para una valor sirve sin problema 
<h3>La base es: <strong> base </strong></h3>

<button (click)="acumular( +5 )">+{{ base }} </button>

<span> {{ numero }} </span>

<button (click)="acumular(-5 )">- {{ base }}</button>

***********************************************************/




}




