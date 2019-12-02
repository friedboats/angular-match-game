import { Component, Input, OnInit } from '@angular/core';
import { Required } from '../decorators/required.decorator';

@Component({
  selector: 'app-tile', 
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  @Input() @Required() id: number;
  @Input() @Required() title: string;
  @Input() @Required() frontImg: string;
  @Input() @Required() backImg: string;

  constructor() { }

  ngOnInit() {
    
  }
}