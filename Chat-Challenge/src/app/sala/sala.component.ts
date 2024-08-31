import { Component, Input } from '@angular/core';
import { MensajeUsuarioComponent } from "../mensaje-usuario/mensaje-usuario.component";
import { MensajeHermanoComponent } from "../mensaje-hermano/mensaje-hermano.component";

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [MensajeUsuarioComponent, MensajeHermanoComponent],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})
export class SalaComponent {
  mensajes : string = "";
  listaMensajes : Array<string> = [];

  recibirMensaje(mensaje : string) {
    this.mensajes = mensaje;
    this.listaMensajes.push(mensaje);
  }
}
