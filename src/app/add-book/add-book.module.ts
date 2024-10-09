import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AddBookPageRoutingModule } from './add-book-routing.module';

import { AddBookPage } from './add-book.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddBookPageRoutingModule,
    RouterModule.forChild([{ path: '', component: AddBookPage }]) 
  ],
  declarations: [AddBookPage]
})
export class AddBookPageModule {}
