const express = require("express"); 
const app = express();



app.get('/',(req,res)=>{
res.send('Hola')
    });


app.get('/productos',(req,res)=>{
res.send('Listado de productos')
    });


app.post('/productos',(req,res)=>{
res.send('Crear producto')
    });


app.put('/productos',(req,res)=>{
res.send('Actualizar producto')
    });


app.delete('/productos',(req,res)=>{
res.send('Borrar producto')
    });


app.get('/usuarios',(req,res)=>{
res.send('Listado de usuarios')
    });


app.post('/usuarios',(req,res)=>{
res.send('Crear usuario')
    });


app.put('/usuarios',(req,res)=>{
res.send('Actualizar un usuario')
    });


app.delete('/usuarios',(req,res)=>{
res.send('Borrar un usuario')
    });



app.listen(8080, () => console.log(`Servidor levantado en el puerto 8080`));