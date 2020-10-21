import { ProxyState } from "../AppState.js"
import Car from "../Models/Car.js"
import { carService } from "../Services/CarService.js"


// Private
let _draw = () => {
  let template = ''
  ProxyState.cars.forEach(c => {template += c.Template})
  document.getElementById('cars').innerHTML = template
}

let _drawForm = () => {
  ProxyState.cars.forEach(c => {})
  document.getElementById('newListingFormContainer').innerHTML = new Car().Form
}


// Public
export default class CarController {
  constructor() {
    ProxyState.on("cars", _draw)
    _draw()
  }

  getNewForm() {
    _drawForm()
  }


}