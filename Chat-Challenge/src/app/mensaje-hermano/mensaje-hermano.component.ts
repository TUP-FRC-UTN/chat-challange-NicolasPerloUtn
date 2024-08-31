import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mensaje-hermano',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mensaje-hermano.component.html',
  styleUrl: './mensaje-hermano.component.css'
})
export class MensajeHermanoComponent {
  //  nombre : string = "Maria"
  //  texto : string = "";
  //  @Output() mensaje = new EventEmitter<string>();
 
  //  enviarMensaje() {
  //    this.mensaje.emit(this.texto)
  //    console.log(this.texto)
  //  }

  @Output() mensaje = new EventEmitter<string>();
  nombreUsuario : string = "Pepe"
  texto : string = "";
     enviarMensaje() {
     this.mensaje.emit(this.texto)
     console.log(this.texto)
   }
}
