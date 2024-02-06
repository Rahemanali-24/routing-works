import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserForModuleComponent } from './user-for-module.component';



@NgModule({
  declarations: [
    UserForModuleComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UserForModuleComponent,
  ],
})
export class UserForModuleModule { }
