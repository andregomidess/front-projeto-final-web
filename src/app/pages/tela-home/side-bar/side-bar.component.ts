import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  constructor(private router: Router) {}

  selectedItem: string = '';

  changeBackgroundColor(item: string) {
    this.selectedItem = item;
    if(item == 'cadastrar'){
      this.router.navigate(['cadastrar'])
    }
  }

}
