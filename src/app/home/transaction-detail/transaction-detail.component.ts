import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { TransactionService } from '../../services/transaction.service';

import { Transaction } from '../../interfaces/transaction';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css'],
})
export class TransactionDetailComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  transaction: Transaction[];
  displayedColumns: string[] = ['id', 'amount', 'balance', 'label', 'date'];

  constructor(
    private route: ActivatedRoute,
    private transactionService: TransactionService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getTransactionById();
  }

  getTransactionById() {
    const id = this.route.snapshot.paramMap.get('id');
    this.transactionService.getTransactionById(id).subscribe((list) => {
      this.transaction = list;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
