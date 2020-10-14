import { ChatService } from './../../providers/chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styles: [
    ]
})
export class ChatComponent implements OnInit {

    mensaje: string = '';

    constructor(private _cs: ChatService) {
        this._cs.cargarMensajes()
            .subscribe();
     }

    ngOnInit(): void {
    }

    enviarMensaje() {
    }
}
