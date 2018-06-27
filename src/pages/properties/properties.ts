import { PropertiesService } from './../../services/properties-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-properties',
  templateUrl: 'properties.html',
})
export class PropertiesPage {

  public properties: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public propertiesService: PropertiesService) {
    this.properties = propertiesService.getAll();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PropertiesPage');
  }

  // view trip detail
  viewDetail(id) {
    //this.navCtrl.push(TripDetailPage, {id: id});
  }

}
