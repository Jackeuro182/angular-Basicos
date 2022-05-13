import { Component } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent {

  heroes:string [] = ['spiderman','Ironman','hulk','thor'];
  hBorradoR:string  = ''  ;

    borrarHeroe (){
    console.log('borrando');
    //this.heroes = [];
    //const heroeBorrado =this.heroes.shift(); eso es solo para eliminar el dato del arreglo
    //de la siguiente dorma es para eliminar y optener nuevamente el dato eliminado par aposterios retornarlo auna variable.
    this.hBorradoR = this.heroes.shift () || '';
    //quiere decir ocupe la variable hBorrado y lo que elimine del arreglo heroes lo regrese en un valor vacio el cual se ocupara cuando elimine algo y lo retorne.
    //si se hace eso ya no es necesario declarar un return de lo que haces 



    //this.hBorradoR = heroeBorrado || ''; se puede hacer de esta forma para recuperar el dato 
    // y mandar imprimir el valor eliminado.
    //console.log(heroeBorrado); muesta los datos borrados del arreglo
    //console.log('H eliminado',' ' + heroeBorrado)
   // return(heroeBorrado);
    
  }

  

}
