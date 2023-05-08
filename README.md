## Body Structure

Layout highly depends on the data fetched by getData.
The component rendering follow json structure. Fully dynamic.

![alt text](flow.drawio.svg "Flowchart")









    <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${this.imageSrc}" class="img-fluid rounded-start" alt="${this.imageAlt}">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
          <p class="card-text">${this.description}</p>
          <p class="card-text"><small class="text-body-secondary">${this.price}</small></p>
        </div>
      </div>
    </div>
  </div>