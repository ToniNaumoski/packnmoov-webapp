import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.scss']
})
export class StepThreeComponent implements OnInit {
  
  streetAddress:string ='';
  houseNumber:string = '';
  postalCode:string = '';
  city ='';
  items: MenuItem[];
  activeIndex: number = 2;
  selectedCategory: any[];
  selectedCategoryTwo:any = null;
  selectedCategoryThree:any = null;

  date1: Date;
  date2: Date;

  categories: any[] = [{ name: 'Möbelauf / -abbau', key: '1' }, { name: 'Tragearbeiten', key: '2' }, { name: 'Umzugsfahrer', key: '3' },{ name: 'Ver- / Entpacken', key: '4' }, { name: 'Montagesrvice', key: '5' }, { name: 'LKW Be/ Enladen', key: '6' }];
  categoriesTwo: any[] = [{ name: 'Ver- / Entpacken', key: '1' }, { name: 'Montageservice', key: '2' }, { name: 'Lkw Be- / Entladen', key: '3' }];
  categoriesThree: any[] = [{ name: 'Ja', key: '1' }, { name: 'Nein, ich wähle selbst', key: '2' }];

  constructor() { }
  val = '12:24';
  ngOnInit(): void {
    this.selectedCategory = this.categories[0];
    this.selectedCategoryTwo = this.categoriesTwo[0];
    this.selectedCategoryThree= this.categoriesTwo[0];

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

  onClickBtn() {
    alert('button is clicked');
  }

  onClickTime() {
    console.log(this.val)
  }

}
