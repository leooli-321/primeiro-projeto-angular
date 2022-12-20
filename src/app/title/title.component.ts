import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges {

 @Input() public title: string = "Hello World!";

  constructor() { }
  ngOnInit(): void { }
  ngOnChanges(): void { }
}
