import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule,MatOptionModule, MatSelectModule, MatIconModule} from '@angular/material'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    
  ],
  exports: [
    MatToolbarModule,
    MatMenuModule,
    MatInputModule,
    MatOptionModule, 
    MatSelectModule, 
    MatIconModule,
    MatCheckboxModule,
    MatCardModule,
    MatRadioModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatDividerModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule
  ]
})
export class AppMaterialModule { }
