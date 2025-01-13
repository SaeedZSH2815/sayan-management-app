import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-other-form',
  imports: [RouterOutlet,RouterLinkActive,RouterLink, CommonModule],
  templateUrl: './other-form.component.html',
  styleUrl: './other-form.component.scss'
})
export class OtherFormComponent {

}
