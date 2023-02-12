import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-nationalite-list',
  templateUrl: './nationalite-list.component.html',
  styleUrls: ['./nationalite-list.component.css'],
  styles: [
    `
        :host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `
  ],
  providers: [MessageService,ConfirmationService]
})
export class NationaliteListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
