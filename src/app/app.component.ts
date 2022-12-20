import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-title *ngIf="destruir"></app-title>
    <button (click)="destruirComponent()">Destruir</button>
    <router-outlet></router-outlet>
  `

})

export class AppComponent implements OnInit {

  public destruir: boolean = true;
  constructor() { }

  ngOnInit(): void { }

  public destruirComponent() {
    this.destruir = false;
  }

}
