import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthloginService } from 'src/app/Services/authlogin.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errormes:boolean=false;
  isInputFocused: boolean = false;
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,private authService:AuthloginService,private router:Router,private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      UserName: ['',Validators.required,],

      password: ['', Validators.required],

    });
  }

  get UserName()
  {
    return this.loginForm.get('UserName')
  }

  get password()
  {
    return this.loginForm.get('password')
  }

  onSubmit() {
    type DefaultFormData = {
      userName: string;
      password: string;
    };
    const defaultFormData: DefaultFormData = {
      userName: this.loginForm.value.UserName,
      password: this.loginForm.value.password,
    };

    if (this.loginForm.valid) {

      this.authService.login(defaultFormData).subscribe({
        next: (data) => {
          // Handle success
          // console.log(`succes ${data.token}`)
          this.router.navigate(['home'])
          
        },
        error: (err) => {
        //  Handle error
        this.errormes=true;
          
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
