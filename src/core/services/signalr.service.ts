import { Injectable } from '@angular/core';
import * as SignalR from '@microsoft/signalr';
import * as RxJS from '../../core/rxjs-operators'

@Injectable({
  providedIn: 'root'
})
export class SignalRService {

  private hub : SignalR.HubConnection = new SignalR.HubConnectionBuilder()
                                         .withUrl("http://localhost:5261/chatHub")
                                         .build();

  constructor() {

  }

  public start() : RxJS.Observable<boolean>{

    return new RxJS.Observable<boolean>((subs)=>
    {
      if(this.hub.state != SignalR.HubConnectionState.Connected){
        this.hub.start()
        .then((v)=>subs.next(true))
        .catch((v)=>subs.next(false))
      }
      else
       subs.next(true);
    }

    );
  }




  receiveMessage(): RxJS.Observable<string> {
    return new RxJS.Observable<string>(
       (observer) => {

       if(this.hub!.state ==  SignalR.HubConnectionState.Connected )
       this.hub!.on('ReceiveMessage', (clMessage: string) => {
          observer.next(clMessage);
       });


    });
  }

  public SendMessage(clMessage : string){
    this.hub?.invoke('SendMessage', clMessage);
  }





}
