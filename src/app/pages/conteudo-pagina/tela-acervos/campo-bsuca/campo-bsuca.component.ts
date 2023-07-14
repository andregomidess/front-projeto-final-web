import { Component } from '@angular/core';
import { SearchService } from '../search-service.component';

@Component({
  selector: 'app-campo-bsuca',
  templateUrl: './campo-bsuca.component.html',
  styleUrls: ['./campo-bsuca.component.scss']
})
export class CampoBsucaComponent{
  searchText: string = '';
  
  constructor(private searchService: SearchService) {}

  filterBooks(searchText: string) {
    this.searchService.setSearchText(searchText);
  }
}