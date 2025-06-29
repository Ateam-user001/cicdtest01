import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'to-start-page',
  imports: [NzButtonModule, RouterModule],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.css'
})
export class To_StartPageComponent {

}
