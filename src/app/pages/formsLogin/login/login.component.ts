import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';



@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  redirectDelay: number;
    showMessages: any;
    strategy: string;
    errors: string[];
    messages: string[];
    user: any;
    submitted: boolean;

    loginForm = this.fb.group({
      email: [''],
      password: ['']
    })

  constructor(private authSvc: AuthService, private fb: FormBuilder, private p: FormsModule) { }

  ngOnInit(): void {
  }

  onLogin(): void{
    const formValue = this.loginForm.value;
    this.authSvc.login(formValue).subscribe( res => {
      // window.location.reload();
      console.log(res)
    })

  }


}
