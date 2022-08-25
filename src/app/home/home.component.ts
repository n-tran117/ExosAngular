import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Transaction } from '../interfaces/transaction';

import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  //transactions: Transaction[] = transactionsData;
  transactionList: Transaction[] = [];
  nbElements: number;
  displayedColumns: string[] = ['id', 'amount', 'balance', 'label', 'date'];

  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  transactions: MatTableDataSource<Transaction>;

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.getTransacions();
  }

  ngAfterViewInit() {}

  getTransacions() {
    this.transactionService.getTransaction().subscribe((list) => {
      this.transactions = new MatTableDataSource(list);
      this.transactions.paginator = this.paginator;
      this.transactions.sort = this.sort;
      this.nbElements = list.length;
    });
  }
}
