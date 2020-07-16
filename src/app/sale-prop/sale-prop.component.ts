import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sale-prop',
  templateUrl: './sale-prop.component.html',
  styleUrls: ['./sale-prop.component.css']
})
export class SalePropComponent implements OnInit {
  propertytype;
  pro_type=['Office','Co-Working','shop','godown/WareHouse','Show Room','Industrial Building','Industrial-Shed'];
  floor_info=['Basement",Ground','First',"Full Building"];
   i:number=1;
  
  constructor() { }


  ngOnInit(): void {
  }
  onDetailSubmit(){

  }

}
