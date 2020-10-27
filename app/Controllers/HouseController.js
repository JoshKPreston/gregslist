import { ProxyState } from "../AppState.js"
import { houseService } from "../Services/HouseService.js"


// Private
let _draw = () => {
  let template = ''
  ProxyState.houses.forEach(h => {template += h.Template})
  document.getElementById('houses').innerHTML = template
}

let _drawForm = () => {
  document.getElementById('newListingFormContainer').innerHTML = ProxyState.houses[0].Form
}

// Public
export default class HouseController {
  constructor() {
    ProxyState.on("houses", _draw)
  }


  getNewForm() {
    _drawForm()
  }

}