// trae express para usarlo
const express = require ("express");
// me crea una variable para usar el exppress
const app = express ();

PORT = 3000;

// configuramos el puerto 
app.set("Port",PORT);

// definimos una ruta y un verbo http (req,res) creamos una funcion
app.get("/hola",(req,res)=>{
    res.send("Hola, Mundo!")
})

app.listen(PORT,()=>{
console.log(`listening port ${PORT}`)
})
