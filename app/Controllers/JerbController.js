import { ProxyState } from "../AppState.js"
import { jerbService } from "../Services/JerbService.js"


// Private
let _draw = () => {
  let template = ''
  ProxyState.jerbs.forEach(j => {template += j.Template})
  document.getElementById('jerbs').innerHTML = template
}


// Public
export default class JerbService {
  constructor() {
    ProxyState.on("jerbs", _draw)
  }
}