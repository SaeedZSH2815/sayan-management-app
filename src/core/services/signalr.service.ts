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
   this.hub.state
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
        console.log("fd");
       if(this.hub!.state ==  SignalR.HubConnectionState.Connected )
       { this.hub!.on('ReceiveMessage', (clMessage: string) => {
          observer.next(clMessage);
       });}
       else
       observer.next("Disconnection");


    });
  }

  public SendMessage(clMessage : string):Promise<any>{
    return this.hub?.invoke('SendMessage', clMessage);

  }





}
