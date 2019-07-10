import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Tab2Page } from '../tab2/tab2.page';
;


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private name;
  constructor(public navCtrl: NavController){

  }
goToTab2Page(){
  this.navCtrl.push(Tab2Page, 
    {firstName:name}

  );
}

}

