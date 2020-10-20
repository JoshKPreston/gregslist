// "data": [
//   {
//   "_id": "5f626c3d84741e0017eeed66",
//   "jobTitle": "Cook",
//   "company": "Restaurant",
//   "rate": 32,
//   "hours": 30,
//   "description": "Cook some food",
//   "__v": 0
//   },


export default class Jerb {
  constructor(data) {
    this._id = data._id
    this.jerbTitle = data.jobTitle 
    this.company = data.company
    this.rate = data.rate 
    this.hours = data.hours 
    this.description = data.description 
  }

  get Template() {
    return /*html*/ `
      <div class="col-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Jerb Title: ${this.jerbTitle}</h5>
            <h6 class="card-subtitle">Company: ${this.company}</h6>
            <p class="card-text">Pay: ${this.rate}</p>
            <p class="card-text">Hours: ${this.hours}</p>
            <p class="card-text">${this.description}</p>
          </div>
        </div>
      </div>
    `
  }
}