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


  get Form() {
    return /*html*/ `
      <!-- Modal -->
      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Post a new car</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form id="newListingForm" onsubmit="app.postListing(event)">
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="jobTitle">Job Title</label>
                            <input class="form-control" type="text" name="jobTitle" id="dataJobTitle">
                        </div>
                        <div class="form-group">
                            <label for="company">Company</label>
                            <input class="form-control" type="text" name="company" id="dataCompany">
                        </div>
                        <div class="form-group">
                            <label for="pay">Pay</label>
                            <input class="form-control" type="number" name="pay"
                                id="dataYear">
                        </div>
                        <div class="form-group">
                            <label for="hours">Hours</label>
                            <input class="form-control" type="number" name="hours" id="dataHours">
                        </div>
                        <div class="form-group">
                            <label for="description">Description</label>
                            <input class="form-control" type="text" name="description"
                                id="datadescription">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Save changes</button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    `
  }

  
}