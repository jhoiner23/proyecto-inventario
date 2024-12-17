# proyecto inventario
### inicio del proyecto
abrimos la terminar en la carpeta del proyecto y hacemos
el comando npm init

```
npm init -y
```
depues instalamos la dependencia
```
npm install express mongoose dotenv cors
```

npm install --save-dev nodemon

abrimos ide (entorno de desarrollo integrado)
```

```

code .
```

creamos los archivos
```

touch index.js .env readme.md .gitignore
```
```
-const express = require ("express"); trae express para poderlo usarlo
desde node_modules para poder usarlo
-const app = express(): creamos una instancia o imagen de express para
usarla en nuestra app.
PORT = 3000: definimos el puerto queremos usar
-app.set("port",PORT):configuramos el puero en nuestra app
-app.get("/hola",:definimos una ruta y un verbo http
-(req.res)=>{ : creamos una funcion que tiene como parametros req:resques y res:resposa
-requet es lo que recibimos
-response es lo que respondemos
-res.send("hola mundo): enviamos la respuesta
-app.listen(PORT,()=>{:escucha el puerto y avisame en el console.log
-console.log(`listening port ${PORT}`):el mensaje de mesnaje queda todo esta ok