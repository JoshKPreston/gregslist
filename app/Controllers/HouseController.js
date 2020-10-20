import { ProxyState } from "../AppState.js"
import { houseService } from "../Services/HouseService.js"


// Private
let _draw = () => {
  let template = ''
  ProxyState.houses.forEach(h => {template += h.Template})
  document.getElementById('houses').innerHTML = template
}


// Public
export default class HouseController {
  constructor() {
    ProxyState.on("houses", _draw)
  }
}