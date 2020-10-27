// "data": [
//   {
//   "_id": "5f4ec55a9d87ed001709822a",
//   "make": "Areial ",
//   "model": "Atom",
//   "year": 2017,
//   "price": 74700,
//   "description": "scary fast",
//   "imgUrl": "https://i.pinimg.com/originals/3e/96/3b/3e963b2b60d41bf55ef0ecc3fa021ffb.jpg",
//   "__v": 0
//   },

export default class Car {
  constructor(data) {
    this._id = data._id
    this.make = data.make
    this.model = data.model 
    this.year = data.year 
    this.price = data.price 
    this.description = data.description 
    this.imgUrl = data.imgUrl
  }

  get Template() {
    return /*html*/ `
      <div class="col-12 col-md-4 d-flex mt-3 mb-3">
        <div class="card listing">
          <img class="card-img-top" src="${this.imgUrl}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${this.year} ${this.make} ${this.model}</h5>
            <h6 class="card-subtitle">$${this.price}</h6>
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
                            <label for="make">Make</label>
                            <input class="form-control" type="text" name="make" id="dataMake">
                        </div>
                        <div class="form-group">
                            <label for="model">Model</label>
                            <input class="form-control" type="text" name="model" id="dataModel">
                        </div>
                        <div class="form-group">
                            <label for="year">Year</label>
                            <input class="form-control" type="number" min="1886" max="" name="year"
                                id="dataYear">
                        </div>
                        <div class="form-group">
                            <label for="price">Price</label>
                            <input class="form-control" type="number" name="price" id="dataPrice">
                        </div>
                        <div class="form-group">
                            <label for="description">Description</label>
                            <input class="form-control" type="text" name="description"
                                id="dataDescription">
                        </div>
                        <div class="form-group">
                            <label for="imgUrl">ImgUrl</label>
                            <input class="form-control" type="text" name="imgUrl" id="dataImgUrl">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button onsubmit="app.controllers.carController.create(event)" type="submit" class="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    `
  }

}