import {Injectable} from "@angular/core";
import {PROPERTIES} from "../mocks/properties-mock";

@Injectable()
export class PropertiesService {
  private properties: any;

  constructor() {
    this.properties = PROPERTIES;
  }

  getAll() {
    return this.properties;
  }

  getItem(id) {
    for (var i = 0; i < this.properties.length; i++) {
      if (this.properties[i].id === parseInt(id)) {
        return this.properties[i];
      }
    }
    return null;
  }

  remove(item) {
    this.properties.splice(this.properties.indexOf(item), 1);
  }
}
