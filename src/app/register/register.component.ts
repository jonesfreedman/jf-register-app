import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataTransferService } from '../data-transfer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userNameGroup = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(4)]],
    passWord: ['', [Validators.required, Validators.minLength(4)]],
    confirmPassWord: ['', [Validators.required, Validators.minLength(4)]],
  });

  constructor(private fb: FormBuilder, private router: Router, private dataService: DataTransferService) { }

  ngOnInit() {
  }

  Submit() {
    this.dataService.setData([this.userNameGroup.value.userName, this.userNameGroup.value.passWord]);
    this.router.navigate(['login']);
  }
}
