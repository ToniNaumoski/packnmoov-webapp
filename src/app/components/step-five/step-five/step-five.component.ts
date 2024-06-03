import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-step-five',
  templateUrl: './step-five.component.html',
  styleUrls: ['./step-five.component.scss']
})
export class StepFiveComponent implements OnInit {
  items: MenuItem[];
  activeIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.items = [{
      label: 'Personal',
      command: (event: any) => {
        this.activeIndex = 0;
        alert('clicked')
      }
    },
    {
      label: 'Tätigkeit',
      command: (event: any) => {
        this.activeIndex = 1;
      }
    },
    {
      label: 'Bezahlmethode',
      command: (event: any) => {
        this.activeIndex = 2;
      }
    },
    {
      label: 'Vorbestätigung',
      command: (event: any) => {
        this.activeIndex = 3;
      }
    },
    {
      label: 'Bestätigung',
      command: (event: any) => {
        this.activeIndex = 4;
      }
    }
    ];
  }

}
