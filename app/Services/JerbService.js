import Jerb from "../Models/Jerb.js"
import { ProxyState } from "../AppState.js"
import { api } from "./AxiosService.js"

class JerbService {
  constructor() {
    this.getJerbs()
  }

  getJerbs() {
    api.get("jobs").then(res => {
      ProxyState.jerbs = res.data.data.map(rawData => new Jerb(rawData))
    }).catch(err => console.log(err))
  }

  // create


  // update


  // delete

  getNewForm(target) {
  }

}


export const jerbService = new JerbService()
