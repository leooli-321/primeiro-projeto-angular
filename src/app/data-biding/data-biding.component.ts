import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {
  public nome: string = "Leo Oli";
  public idade: number = 27;

  public checkedDisabled: boolean = true;
  public imgSrc: string = "https://i.pinimg.com/736x/3d/14/bb/3d14bb74a91f80906190fda62f4a57f3--creative-resume-templates-neko-kawaii.jpg";
  public imgTitle: string = "Camomilo"

  public position: {x: number, y: number} = {x: 0, y: 0}

  constructor() { }

  ngOnInit(): void { }

  public alertaInfo(valor: MouseEvent) {
    alert(valor);
  }

  public mouseMoveTeste(valor: MouseEvent) {
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;

  }

}
