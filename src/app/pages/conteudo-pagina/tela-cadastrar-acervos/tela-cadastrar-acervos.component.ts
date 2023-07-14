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
  showMessage: boolean = false;

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
      if (this.showMessage) {
        this.showMessage = false;
        return;
      }
      this.showMessage = true;
      const book = this.createFormData();
      console.log(book);

      this.conteudoPaginaService.createBook(book).subscribe({
        next: (res) => {
          console.log(res);

          // Verifica se o alerta já foi exibido antes de adicioná-lo novamente
         
            this.appendAlert('Livro Cadastrado com Sucesso', 'success');
          
        },
        error: (err) => {
          console.log(err);
        }
      });
      
    }
  
    appendAlert(message: string, type: string) {
      const alertElement = document.createElement('div');
      alertElement.classList.add('alert', `alert-${type}`, 'alert-dismissible');
      alertElement.setAttribute('role', 'alert');

      const messageElement = document.createElement('div');
      messageElement.textContent = message;
      alertElement.appendChild(messageElement);

      const closeButton = document.createElement('button');
      closeButton.classList.add('btn-close');
      closeButton.setAttribute('type', 'button');
      closeButton.setAttribute('data-bs-dismiss', 'alert');
      closeButton.setAttribute('aria-label', 'Close');
      alertElement.appendChild(closeButton);

      const alertWrapper = document.querySelector('.alert-wrapper');
      if (alertWrapper instanceof Element) {
        alertWrapper.appendChild(alertElement);
      }
    }




}
