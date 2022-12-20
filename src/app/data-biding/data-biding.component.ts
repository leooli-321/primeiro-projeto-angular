import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {
  public nome:string = "Leo Oli";
  public idade:number = 27;

  constructor(){}

  ngOnInit(): void {
    
  }

}
