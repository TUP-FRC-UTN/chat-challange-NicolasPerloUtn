import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mensaje-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mensaje-usuario.component.html',
  styleUrl: './mensaje-usuario.component.css'
})
export class MensajeUsuarioComponent {
  // nombre : string = "Pepe";
  // texto : string = "";
  // @Output() mensaje = new EventEmitter<string>();

  // enviarMensaje() {
  //   this.mensaje.emit(this.texto)
  //   console.log(this.texto)
  // }

  @Output() mensaje = new EventEmitter<string>();
  nombreUsuario : string = "Maria"
  texto : string = "";
     enviarMensaje() {
     this.mensaje.emit(this.texto)
     console.log(this.texto)
   }
}
