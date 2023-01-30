// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 0,
      title: "Articulo 1",
      price: 100,
      image: "http://localhost:3000/img/articulo1.jpg",
      description: "Esta es la descripción del articulo 1"
    },
    {
      id: 1,
      title: "Articulo 2",
      price: 200,
      image: "http://localhost:3000/img/articulo2.jpg",
      description: "Esta es la descripción del articulo 2"
    },
    {
      id: 2,
      title: "Articulo 3",
      price: 300,
      image: "http://localhost:3000/img/articulo3.jpg",
      description: "Esta es la descripción del articulo 3"
    },
    {
      id: 3,
      title: "Articulo 4",
      price: 400,
      image: "http://localhost:3000/img/articulo4.jpg",
      description: "Esta es la descripción del articulo 4"
    },
    {
      id: 4,
      title: "Articulo 5",
      price: 500,
      image: "http://localhost:3000/img/articulo5.jpg",
      description: "Esta es la descripción del articulo 5"
    },
    {
      id: 5,
      title: "Articulo 6",
      price: 600,
      image: "http://localhost:3000/img/articulo6.jpg",
      description: "Esta es la descripción del articulo 6"
    },
    {
      id: 6,
      title: "Articulo 7",
      price: 700,
      image: "http://localhost:3000/img/articulo7.jpg",
      description: "Esta es la descripción del articulo 7"
    },
    {
      id: 7,
      title: "Articulo 8",
      price: 800,
      image: "http://localhost:3000/img/articulo8.jpg",
      description: "Esta es la descripción del articulo 8"
    },
    {
      id: 8,
      title: "Articulo 9",
      price: 900,
      image: "http://localhost:3000/img/articulo9.jpg",
      description: "Esta es la descripción del articulo 9"
    },
  ])
}
