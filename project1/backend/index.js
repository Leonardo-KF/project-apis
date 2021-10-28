const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(cors());

const carros = [
  {
    id: 0,
    img: "https://i.pinimg.com/originals/bf/26/5b/bf265b24d9b64dad03831c254cb0c4fb.png",
    marca: "Honda",
    modelo: "Civic SI",
    ano: 2008,
  },
  {
    id: 1,
    img: "https://w1.pngwing.com/pngs/792/40/png-transparent-cartoon-car-mitsubishi-convertible-spyder-automatic-transmission-mitsubishi-eclipse-spyder-vehicle-family-car.png",
    marca: "Mitsubishi",
    modelo: "Eclipse",
    ano: "2005",
  },
  {
    id: 2,
    img: "https://e7.pngegg.com/pngimages/908/724/png-clipart-2018-porsche-panamera-2015-porsche-panamera-porsche-panamera-4-car-porsche-compact-car-car.png",
    marca: "Porsche",
    modelo: "Panamera",
    ano: 2015,
  },
  {
    id: 3,
    img: "https://cdn.motor1.com/images/mgl/pEblJ/s1/maserati-mc20.jpg",
    marca: "Maserati",
    modelo: "MC20",
    ano: 2020,
  },
  {
    id: 4,
    img: "https://cdn.hum3d.com/wp-content/uploads/Lamborghini/060_Lamborghini_SC20_2020/Lamborghini_SC20_2020_1000_0001.jpg",
    marca: "Lamborghini",
    modelo: "SC20",
    ano: 2018,
  },
  {
    id: 5,
    img: "https://e7.pngegg.com/pngimages/573/312/png-clipart-2012-dodge-charger-2004-mazda-rx-8-car-nissan-zcar-compact-car-headlamp.png",
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
  carros.splice(id, 1);
  res.send(carros);
});

app.listen(3000);
