import { Component, OnInit } from '@angular/core';
import { AnnouncementCost } from "../../../models/AnnouncementCost";
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.scss']
})
export class StepFourComponent implements OnInit {
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
