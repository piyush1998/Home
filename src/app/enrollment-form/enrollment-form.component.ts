import { Component, OnInit } from '@angular/core';
import {User} from '../Information/User';
import {EnrollmentServiceService} from '../service/enrollment-service.service'
import { Property_information } from '../Information/Property-Information';
import { Location_Information } from '../Information/Location-Information';
import { Full_Information } from '../Information/Full-Information';
import { ResaleDetail_Information } from '../Information/ResaleDetail-Information';
@Component({
  selector: 'enrollment-form',
  templateUrl: './enrollment-form.component.html',
  styleUrls: ['./enrollment-form.component.css']
})
export class EnrollmentFormComponent implements OnInit {
  title = 'tdf1';
  pro=['Rent','Sell']
  propertytype;
  fullInfo;
  //property details
  pro_type=['Office','Co-Working','shop','godown/WareHouse','Show Room','Industrial Building','Industrial-Shed'];
  floor_info=['Basement",Ground','First',"Full Building"];
  saleblockvalid:boolean;

  onDetailSubmit(){

  }
  //time means how many time user click submit
  //after first step it will disable the submit button
  submitbtn=false;

  public dataModel=new User("","",0,"");
  public propertydetail=new Property_information("","","","","","");
  public locationdetail=new Location_Information("","","","","");
  public resaledetail=new ResaleDetail_Information("","",false,"","","")
 //if user selected any section of  dropdrow this method called
  public onpropertyClick(value){

     console.log(value)
  }
 public onSubmit(){
     console.log(this.dataModel);
     this.submitbtn=true;
     //creating json array of all informations
      this.fullInfo=new Full_Information(this.dataModel,this.propertydetail,this.locationdetail,this.resaledetail);
         //  this.personDetail.enroll(this.dataModel).subscribe(data=>console.log('Success!',data),
    //  error=>console.log('Error!',error))
    this._pdetail.enrollment(this.fullInfo).subscribe(data=>console.log('success!',data),
    error=>console.log('Error!',error)    
    )
    
 }
 mySelectHandler(event){
   if(event=='Sell'){
     this.saleblockvalid=true
   }
   else{
     this.saleblockvalid=false
   }
 }
  constructor(private _pdetail:EnrollmentServiceService) { }

  ngOnInit(): void {
  }

}
