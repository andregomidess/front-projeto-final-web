import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/User.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() userData!: User;

  logout(){
    localStorage.removeItem('token');
    location.reload();
  }

}
