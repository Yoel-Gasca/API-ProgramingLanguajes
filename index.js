/* API Lenguajes de programacion-
npm i mysql -> instala MySQL en el proyecto en Node */


const express = require('express');
const app = express();
const port = 3000;
const programmingLanguajesRouter = require('./routes/prommingLanguajes');

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true
    })
);

app.get("/", (req, res) => {
    res.json({message: "OK"});
});

app.use("/languajes", programmingLanguajesRouter);

//Identificar varios errores
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
});

app.listen(port, () =>{
    console.log(`App escuchando en http://localhost:${port}`);
});