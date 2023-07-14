import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Book } from 'src/app/models/Book.model';
import { ConteudoPaginaService } from 'src/app/pages/conteudo-pagina/service/conteudo-pagina.service';

@Component({
  selector: 'app-modal-editar',
  templateUrl: './modal-editar.component.html',
  styleUrls: ['./modal-editar.component.scss']
})
export class ModalEditarComponent implements OnInit, OnDestroy {

  form!: FormGroup;
  fotoServer!: File;
  @Input() book!: Book;
  @Input() modalId!: string;
  newBook!: Book;

  constructor(
    private conteudoPaginaService: ConteudoPaginaService,
    private fb: FormBuilder
    ) {
      
    }
  ngOnDestroy(): void {
    this.form.reset();
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      title: [this.book?.title, Validators.required],
      subtitle: [this.book?.subtitle],
      amount: [this.book?.amount],
      authors: [this.book?.authors, Validators.required],
      publisher: [this.book?.publisher, Validators.required],
      publishedDate: [this.book?.publishedDate, Validators.required],
      description: [this.book?.description, Validators.required],
      ISBN: [this.book?.ISBN],
      pageCount: [this.book?.pageCount],
      language: [this.book?.language, Validators.required],
      categories: [this.book?.categories]

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
      if(this.fotoServer) {
        formData.append('thumbnail', this.fotoServer);
      }
      return formData;
    }

    createNewBook(){
      this.newBook.title = this.form.get('title')?.value;
    }

    onSubmit(){
      const formData = this.createFormData();
      this.conteudoPaginaService.editBook(formData, this.book._id).subscribe({
        next: (res) => {
          //const {updatedData}: Book = res;
          const updatedFields = {
            _id: this.book._id,
            fields: {
              title: this.form.value.title,
              ISBN: this.form.value.ISBN,
              publisher: this.form.value.publisher,
              // adicione outros campos que deseja atualizar
            }
          };
          this.conteudoPaginaService.livroatualizado.emit(updatedFields);
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
}
