import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User.model';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-tela-home',
  templateUrl: './tela-home.component.html',
  styleUrls: ['./tela-home.component.scss']
})
export class TelaHomeComponent implements OnInit {

  user!: User;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.userService.getCurrrentuser().subscribe({
      next: (res) => {
        this.user = res;
        console.log(this.user.image);
      }
    });
  }

}
