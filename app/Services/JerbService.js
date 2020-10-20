import Jerb from "../Models/Jerb.js"
import { ProxyState } from "../AppState.js"
import { api } from "./AxiosService.js"

class JerbService {
  constructor() {
    
  }

  getJerbs() {
    api.get("jobs").then(res => {
      console.log(res.data);
    })
  }


}


export const jerbService = new JerbService()
