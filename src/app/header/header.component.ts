import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../data-transfer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  display: boolean;
  constructor(private dataService: DataTransferService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(res => {
      if (res == "success") {
        this.display = true;
      }
    });
  }
}
