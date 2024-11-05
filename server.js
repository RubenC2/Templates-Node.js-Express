const express = require("express"); // Importamos el paquete express
const app = express(); // Inicializar servidor con express
const port = 3000; // Puerto a usar por el servidor

// // Logger, formato de lo que sale por terminal
app.use(express.json()); // Middleware para parsear el body de las peticiones
app.use(express.static("public")); //Middleware para servir archivos estáticos de front. CSS, JS, assets.

//Configuración de vistas PUG - Motor de plantillas
app.set('view engine', 'pug');
app.set('views','./views');

// GET http://localhost:3000/ --> Ruta /. La principal
// app.get("/", (req, res) => {
//     // req: request, res: response
//     res.send("Hello World!. Welcome to Backend");
//   });

  //Rutas WEB
const homeRoutes = require("./routes/home.routes.js")
const aboutRoutes = require("./routes/about.routes")
const locationRoutes = require("./routes/location.routes")
const missionRoutes = require("./routes/mission.routes")
const contactRoutes = require("./routes/contact.routes")

//Rutas WEB a habilitar
app.use("/home", homeRoutes) // GET http://localhost:3000/home
app.use("/about", aboutRoutes) // GET http://localhost:3000/about
app.use("/location", locationRoutes) // GET http://localhost:3000/location
app.use("/mission", missionRoutes) // GET http://localhost:3000/mission
app.use("/contact", contactRoutes) // GET http://localhost:3000/contact

// Para ruta no existente
// app.use("*");

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});


