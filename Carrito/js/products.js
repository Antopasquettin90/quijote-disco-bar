const productos = [
  {
    id: 1,
    nombre: "Sabado 1/04/23",
    precio: 1500,
    img:"/imagenes/dj-tiesto-bn.jpg",
    cantidad: 1,
  },
  {
    id: 2,
    nombre: "Sabado 8/04/23",
    precio: 1400,
    img:
      "/imagenes/charlotte-oficial-picture.jpg",
    cantidad: 1,
  },
  {
    id: 3,
    nombre: "Sabado 15/04/23",
    precio: 1200,
    img:
      "/imagenes/armin-van-buuren_74b7b1de.webp",
    cantidad: 1,
  },
  {
    id: 4,
    nombre: "Sabado 22/04/23",
    precio: 1300,
    img:
      "/imagenes/lilly-palmer-dj-oficial.jpg",
    cantidad: 1,
  },
  {
    id: 5,
    nombre: "Sabado 29/04/23",
    precio: 1400,
    img:
      "/imagenes/martin-garrix-oficial.avif",
    cantidad: 1,
  },
  {
    id: 6,
    nombre: "Sabado 06/05/23",
    precio: 1500,
    img:
      "/imagenes/david-guetta-oficial.jpg",
    cantidad: 1,
  },
];

fetch("productos.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // Trabaja con los datos obtenidos
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });