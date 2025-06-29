import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      [nz-button] {
        margin-bottom: 12px;
      }
    ` ],
  styleUrl: './app.component.css',
  imports: [CommonModule,RouterModule]
})
export class AppComponent {
  buttons = [ 
    { path: '/ou-start-page',   label: 'XXXXXXXXXXXXXXXXXXXXXXXX投票（王）' },
    { path: '/sato-start-page', label: 'XXXXXXXXXXXXXXXXXXXXXXXX投票（佐藤）' },
    { path: '/to-start-page',   label: 'XXXXXXXXXXXXXXXXXXXXXXXX投票（杜）' },
    { path: '/en-start-page',   label: 'XXXXXXXXXXXXXXXXXXXXXXXX投票（袁）' },
    { path: '/kyo-start-page',  label: 'XXXXXXXXXXXXXXXXXXXXXXXX投票（鞏）' },
    { path: '/ko-start-page',   label: 'XXXXXXXXXXXXXXXXXXXXXXXX投票（胡）' },
    { path: '/hou-start-page',  label: '【参照例】XXXXXXXXXXXXXXXXXXXXXXXX（彭）' },
    { path: '/nei-start-page',  label: '【参照例】犬派vs猫派対決！！！ 犬と猫どちらが好きか、ここで投票しましょう！（寧）' }
  ];

  Isview = true;
  
  onClick1() {
    this.Isview = false;
  }

}
