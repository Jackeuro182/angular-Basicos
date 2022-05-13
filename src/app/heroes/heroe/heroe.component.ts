import { Component } from "@angular/core";
import { Template } from '@angular/compiler/src/render3/r3_ast';



@Component({
    selector: 'app-heroe',//este se manda a llamar en el html general 
    templateUrl: 'heroe.component.html',
    template: ` 

    `
})


export class HeroeComponent{ //este igual se puede llamar en el html general pero debe modificar el templete url
  

    nombre: string = 'Ironman';
    edad: number= 45 ;

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }


    obtenerNombre(): string {

        //return this.nombre + ' - ' + this.edad.toString(); esto es literal mento lo miso que lo que esta declarado en la parte de abajo.
        //solo que usamos esta por que ellos bsck this ( ` ` ) para crear temples de un string
        return `${ this.nombre } - ${ this.edad }`;1
    }

    cambiarNombre ():void {
        this.nombre = 'Spiderman';
        

    }
    cambiarEdad ():void {
        this.edad = 30;
        

    }

}