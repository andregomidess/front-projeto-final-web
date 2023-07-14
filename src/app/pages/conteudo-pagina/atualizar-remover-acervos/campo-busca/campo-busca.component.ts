import { Component } from '@angular/core';
import { SearchService } from '../../tela-acervos/search-service.component';

@Component({
  selector: 'app-campo-busca-att-del-acervo',
  templateUrl: './campo-busca.component.html',
  styleUrls: ['./campo-busca.component.scss']
})
export class CampoBuscaComponent {
  searchText: string = '';
  
  constructor(private searchService: SearchService) {}

  filterBooks(searchText: string) {
    this.searchService.setSearchText(searchText);
  }

  limpar(searchText: string) {
    this.searchText = '';
    this.filterBooks(searchText);
  }

}
