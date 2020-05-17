import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataTransferService } from '../data-transfer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  success: boolean;
  display: boolean;
  credentials: any;
  userNameGroup = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(4)]],
    passWord: ['', [Validators.required, Validators.minLength(4)]],
  });

  constructor(private fb: FormBuilder, private dataService: DataTransferService, private route: Router) { }

  ngOnInit() {
    this.dataService.getData()
      .subscribe(res => this.credentials = res);
  }

  Submit() {
    this.display = true;
    if (this.userNameGroup.value.userName == this.credentials[0] && this.userNameGroup.value.passWord == this.credentials[1]) {
      this.success = true;
      this.dataService.setData("success");
      this.route.navigate(['details']);
    }
    else {
      this.success = false;
    }
  }
}
