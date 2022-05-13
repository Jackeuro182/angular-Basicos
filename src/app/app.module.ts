import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { ContadorComponent } from './contador/contador/contador.component';
//Como los componentes Heroes y listC ya estan en su propio app.modulo  vamos a eliminarlos en este caso solo comentarlos
//import { HeroeComponent } from './heroes/heroe/heroe.component';
//import { ListadoComponent } from './heroes/listado/listado.component';
import { HeoresModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/Contador.module';


@NgModule({
  declarations: [
    AppComponent, 
   // ContadorComponent,
    //estos igual debemos eliminarlo ya que ya fueron declarados en el app.module de heroes
    //HeroeComponent,
    //ListadoComponent

  ],
  imports: [
    BrowserModule,
    //recordad que en la parte de impor solo importamos los modulos entonces en esta parte mandaremos a llamadar
    //el modulo creado en la carpeta de heroes.
    HeoresModule,
    ContadorModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
