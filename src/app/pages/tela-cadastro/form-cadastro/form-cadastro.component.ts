import { Component } from '@angular/core';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.scss']
})
export class FormCadastroComponent {
  foto: string | undefined;

  onFotoChange(event: any) {
    const files = event.target.files;
    if (files && files.length > 0) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.foto = e.target.result as string;
      };
      reader.readAsDataURL(files[0]);
    } else {
      this.foto = '../../../../assets/images/login/user.png'; // Caminho para a imagem padrão
    }
  }

  cadastrar() {
    const nome = (document.getElementById('nome') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const senha = (document.getElementById('senha') as HTMLInputElement).value;
    const confirmarSenha = (document.getElementById('confirmarSenha') as HTMLInputElement).value;

  }
}
