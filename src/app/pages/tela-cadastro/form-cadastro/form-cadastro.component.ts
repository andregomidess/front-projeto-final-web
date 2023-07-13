import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.scss']
})
export class FormCadastroComponent {
  foto: string | undefined;
  fotoServer!: File;
  form!: FormGroup;


  onFotoChange(event: any) {
    const files = event.target.files;
    if (files && files.length > 0) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.foto = e.target.result as string;
        this.fotoServer = files[0];
      };
      reader.readAsDataURL(files[0]);
    }
  }

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      confirmPassword: [null, [Validators.required, this.equalsTo('password')]],
    });
  }

  equalsTo(otherField: string){
    const validator = (formControl: FormControl)=> {
      if (otherField == null){
        throw new Error('É necessário informar o campo');
      }

      if (!formControl.root || !(<FormGroup>formControl.root).controls){
        return null;
      }

      const field = (<FormGroup>formControl.root).get(otherField);

      if (!field){
        throw new Error('É necessário informar um campo válido');
      }


      if(field.value !== formControl.value){
        return {equalsTo: otherField}
      }
      return null;
    }

    return validator;
  }

  constructFormData(){
    const formData = new FormData();
    formData.append('name', this.form.get('name')?.value);
    formData.append('email', this.form.get('email')?.value);
    formData.append('password', this.form.get('password')?.value);
    formData.append('confirmPassword', this.form.get('confirmPassword')?.value);
    formData.append('permission', this.form.get('permission')?.value);
    formData.append('image', this.fotoServer);
    return formData;
  }

  async onSubmit(){
    const formData = this.constructFormData();
    try{
      if (this.form.valid){
        const res = await this.authService.createAccount(formData);
        console.log(res);
        this.router.navigate(['/login']);


      }else{
        console.log('Formulario inválido');
      }
    }catch(error){
      console.error(error);
    }
  }

  
}
