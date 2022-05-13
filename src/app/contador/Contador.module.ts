//el modulo debe de llamarse igual a la carpeta de la misma
//hacer esta importacion siempre es la mas importante
import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { ContadorComponent } from './contador/contador.component';



//para utilizar el decorador importado de ngmodule solo pondemos lo siguientes:
@NgModule({
    //las declarations lo que dice es que qu tiene este modulo creado dentro de esta carpeta
    declarations:[
        //declarar los componen que estan creados dentro de la carpeta y de su sub carpetas 
        ContadorComponent

    ],
    exports: [
        //esto es por si queremos mandar a llamar cosas al html global y no de error
        ContadorComponent
    ],
    imports: [
        //en esta parte solo se importa los modulor como podria ser el que estamos creando ejemplo 
        //poner ejemplo; HeoresModule 
        CommonModule

    ]
})

//hay que exportar para poder usarla fuera de este archivo  com de igual forma lamar igual como el nombre del archivo
//heroes.module = HeroesModule
export class ContadorModule{}