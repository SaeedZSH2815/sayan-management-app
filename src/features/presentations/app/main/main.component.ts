import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserLoginComponent } from '../pages/users/user-login/user-login.component';

@Component({
  selector: 'app-main',
  imports: [RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
