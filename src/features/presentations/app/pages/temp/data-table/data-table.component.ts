import { Component, ViewChild } from '@angular/core';


@Component({
  selector: 'app-data-table',
  imports: [],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent {



  dispalyedColumns = ["id", "name"];
}