import { Component } from '@angular/core';
import { ConteudoPaginaService } from '../service/conteudo-pagina.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tela-cadastrar-acervos',
  templateUrl: './tela-cadastrar-acervos.component.html',
  styleUrls: ['./tela-cadastrar-acervos.component.scss']
})
export class TelaCadastrarAcervosComponent {
  form!: FormGroup;
  fotoServer!: File;

  constructor(
    private conteudoPaginaService: ConteudoPaginaService,
    private fb: FormBuilder
    ) {
      this.form = this.fb.group({
        title: ['', Validators.required],
        subtitle: [null],
        amount: [null],
        authors: ['', Validators.required],
        publisher: ['', Validators.required],
        publishedDate: ['', Validators.required],
        description: ['', Validators.required],
        ISBN: [null],
        pageCount: [null],
        language: [null, Validators.required],
        categories: [null]

      });
    }

    onFotoChange(event: any) {
      this.fotoServer = event.target.files[0];
    }

    createFormData(){
      const formData = new FormData();
      const formValue = this.form.value;

      for (const key in formValue) {
        if (formValue.hasOwnProperty(key)) {
          formData.append(key, formValue[key]);
        }
      }
      formData.append('thumbnail', this.fotoServer);
      return formData;
    }

    onSubmit(){
      const book = this.createFormData();
      console.log(book);
      this.conteudoPaginaService.createBook(book).subscribe({
        next : (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        }
      });
    }




}
