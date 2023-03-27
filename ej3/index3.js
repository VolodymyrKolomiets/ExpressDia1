const express = require("express"); 
const app = express();

app.use(express.json());

const products =  [
      { id: 1, nombre: 'Taza de Harry Potter' , precio: 300},
      { id: 2, nombre: 'FIFA 22 PS5' , precio: 1000},
      {  id: 3, nombre: 'Figura Goku Super Saiyan' , precio: 100},
      {  id: 4,  nombre: 'Zelda Breath of the Wild' , precio: 200},
      {  id: 5,  nombre: 'Skin Valorant' , precio: 120},
      {  id: 6, nombre: 'Taza de Star Wars' , precio: 220}
    ];

  app.get("/products", (req, res) => {
    res.send({description: "productos",products});
  });


  app.post("/products", (req, res) => {
  const newProducts = {
    id: products.length + 1,
    nombre: req.body.nombre,
    precio: req.body.precio
};
if (!req.body.nombre || !req.body.precio) {
    res.status(400).send("Por favor rellena todos los campos");
  } else {
products.push(newProducts)
res.send(products)
}
});



app.put("/products/:id", (req, res) => {
    const found = products.some((product) => product.id == req.params.id);
    if (found) {
      products.forEach((product) => {
        if (product.id == req.params.id) {
          (product.nombre = req.body.nombre), (product.precio = req.body.precio);
          res.send(product);
        }
      });
    } else {
      res.status(404).send(`products with id ${req.params.id} not found`);
    }
  });



  app.delete("/products/:id", (req, res) => {
    const found = products.some((product) => product.id == req.params.id);
    if (found) {
      res.send(products.filter((product) => product.id !== +req.params.id)); 
    } else {
      res.status(404).send(`Product with id ${req.params.id} not found`);
    }
  });

  app.get('/products/precio/:precio', (req, res) => {
    const found = products.some((product) => product.precio == req.params.precio);
    if (found) {
      res.send(products.filter((product) => product.precio == req.params.precio)); 
    } else {
      res.status(404).send(`Product with id ${req.params.precio} not found`);
    }
  });


  app.get('/products/filter', (req, res) => {
      res.send(products.filter((product) => product.precio>50 && product.precio<250)); 
  });


  app.get("/products/id/:id", (req, res) => {
    const found = products.some((product) => product.id == req.params.id);
    if (found) {
      res.send(products.filter((product) => product.id == req.params.id)); 
    } else {
      res.status(404).send(`Product with id ${req.params.id} not found`);
    }
  });


  app.get("/products/nombre/:nombre", (req, res) => {
    const found = products.some((product) => product.nombre == req.params.nombre);
    if (found) {
      res.send(products.filter((product) => product.nombre == req.params.nombre)); 
    } else {
      res.status(404).send(`Product with nombre ${req.params.nombre} not found`);
    }
  });

app.listen(8080, () => console.log(`Servidor levantado en el puerto 8080`));