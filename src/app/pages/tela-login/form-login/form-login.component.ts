import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnDestroy {

  form!: FormGroup;
  loginError = false;

  login = {
    email: '',
    password: ''
  };
  private formValueChangesSubscription: Subscription ;


  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
    ) {
      this.form = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required, ]
      })

      this.formValueChangesSubscription = this.form.valueChanges.subscribe(formValue => {
        this.login.email = formValue.email;
        this.login.password = formValue.password;
      });
    }

    ngOnDestroy(): void {
      if (this.formValueChangesSubscription) {
        this.formValueChangesSubscription.unsubscribe();
        this.form.reset();
      }
    }

    async onSubmit() {
      try {
        if (this.form.valid){
          const loggedIn = await this.authService.login(this.login);
          this.form.reset();
          if (loggedIn) {
            console.log('Login efetuado');
            this.loginError = false;
            this.router.navigate(['/home']);
          } else {
            this.loginError = true;
            console.log('Login não autorizado');
          }
        } else{
          this.loginError = true;
          console.log('formulario inválido');
        }
      } catch (error) {
        this.loginError = true;
        console.error(error);
      }
    }

}
