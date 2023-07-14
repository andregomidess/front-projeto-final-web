import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User.model';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  @Input() userData!: User;


}
