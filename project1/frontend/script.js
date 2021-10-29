const apiURL = "http://localhost:3000/";
const lista = document.getElementById("lista");
const cadastro = document.getElementById("bar-cadastro");
const form = document.getElementById("cadastro");
const cancel = document.getElementById("cancelar");

const getCars = async () => {
  const carsdata = await fetch(apiURL);
  const dados = await carsdata.json();
  cadastro.addEventListener("click", (e) => {
    e.preventDefault();
    form.style.opacity = 0;
    form.style.display = "flex";
    setTimeout(() => {
      form.style.opacity = 1;
    }, 300);
  });
  cancel.addEventListener("click", (e) => {
    setTimeout(() => {
      form.style.opacity = 0;
    }, 200);
    setTimeout(() => {
      form.style.display = "none";
    }, 300);
  });
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
               </div>
              `
    );
  });
};

getCars();
