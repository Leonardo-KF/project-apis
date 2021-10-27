const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(cors());

const carros = [
  {
    id: 0,
    marca: "Honda",
    modelo: "Civic SI",
    ano: 2008,
  },
  {
    id: 1,
    marca: "Mitsubishi",
    modelo: "Eclipse",
    ano: "2003",
  },
  {
    id: 2,
    marca: "Porsche",
    modelo: "Panamera",
    ano: 2015,
  },
  {
    id: 3,
    marca: "Maserati",
    modelo: "MC20",
    ano: 2020,
  },
  {
    id: 4,
    marca: "Lamborghini",
    modelo: "SC20",
    ano: 2018,
  },
  {
    id: 5,
    marca: "Nissan",
    modelo: "350Z",
    ano: 2008,
  },
];

app.get("/", (req, res) => {
  res.send(carros);
});

app.post("/cadastro", (req, res) => {
  const { marca, modelo, ano } = req.body;
  const car = {
    id: carros.length,
    marca: marca,
    modelo: modelo,
    ano: ano,
  };
  carros.push(car);
  res.send(carros);
});

app.put("/update/:id", (req, res) => {
  const id = req.params.id;
  const { marca, modelo, ano } = req.body;
  carros[id] = {
    id: id,
    marca: marca,
    modelo: modelo,
    ano: ano,
  };
  res.send(carros);
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  delete carros[id];
  res.send(carros);
});

app.listen(3000);
