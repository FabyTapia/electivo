import { Component } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { NavParams, NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  name;

  constructor(public menuService:MenuService, 
              public NavCtrl :NavController,          
              public NavParams:NavParams  ){

        this.name = NavParams.get('name');        

}
ionViewDidLoad(){
  
}
}