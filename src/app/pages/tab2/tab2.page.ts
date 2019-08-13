import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


public menu:any[]=[];
public menuToShow:any[]=[];//se crea nuevo arreglo para mostrar tipo

public filterBy:string='Lunch';

  constructor(public menuService:MenuService){
}
ionViewWillEnter(){
    this.menu = this.menuService.getMenu();
    this.updateMenuToShow();
  }
  
  updateMenuToShow(): void {
    this.menuToShow = this.menu.filter(item => item.Type == this.filterBy);
  }
  
  handleBreakfastClick(){
    this.filterBy = "Breakfast";
    this.updateMenuToShow()
  }
  handleLunchClick(){
    this.filterBy = "Lunch";
    this.updateMenuToShow()
  }
  
  
  }




//propiedad privada solo se ve en este componente

//llamo al menu desde service



 