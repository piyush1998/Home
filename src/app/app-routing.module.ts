import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalePropComponent } from './sale-prop/sale-prop.component';


const routes: Routes = [{path:"saleform",component:SalePropComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
