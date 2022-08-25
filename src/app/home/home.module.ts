import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppRoutingModule } from '../app-routing.module';

import { HomeComponent } from './home.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';

@NgModule({
  imports: [
    CommonModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    AppRoutingModule,
  ],
  declarations: [HomeComponent, TransactionDetailComponent],
})
export class HomeModule {}
