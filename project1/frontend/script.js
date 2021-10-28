const apiURL = "http://localhost:3000/";
const lista = document.getElementById("lista");

const getCars = async () => {
  const carsdata = await fetch(apiURL);
  const dados = await carsdata.json();
  dados.map((dados) => {
    lista.insertAdjacentHTML(
      "beforeend",
      `
               <div class="col" id="model-car">
                <div class="card">
                  <img src=${dados.img} class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${dados.modelo}</h5>
                    <span class="badge bg-primary">${dados.ano}</span>
                    <p class="card-text">${dados.marca}</p>
                  </div>
                </div>
              </div>`
    );
  });
};

getCars();
