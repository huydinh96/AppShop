import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDatepickerModule,
  MatBadgeModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatToolbarModule,
  MatInputModule,
  MatMenuModule,
  MatSidenavModule,
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatBadgeModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatToolbarModule,
    MatInputModule,
    MatMenuModule,
    MatSidenavModule,
  ],
  exports: [
    CommonModule,
    MatDatepickerModule,
    MatBadgeModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatToolbarModule,
    MatInputModule,
    MatMenuModule,
    MatSidenavModule,
  ],
  declarations: []
})
export class MaterialModule { }
