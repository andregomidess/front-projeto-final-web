import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/User.model';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  ngOnInit(): void {
    this.urlImage = `${environment.api}/images/users/${this.userData.image}`;
  }

  @Input() userData!: User;
  urlImage: string =  '';

}
