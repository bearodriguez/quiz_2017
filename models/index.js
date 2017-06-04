var path = require('path');

// Cargar ORM
var Sequelize = require('sequelize');
// Para usar en local BBDD SQLite:
   // DATABASE_URL = sqlite:///
  // DATABASE_STORAGE = quiz.sqlite
// Para usar en Heroku BBDD Postgres:
// DATABASE_URL = postgres://prqtbuvzlnithnf:e1335b4f9dadbac3a29c11807095ec4431c9b8b2d013f760b0308ed92d982c64@ec2-107-22-223-6.compute-1.amazonaws.com:5432/d2jvc5uo9vv5fb

// Usando BBDD SQLite
//var sequelize = new Sequelize("sqlite:///", {storage: "quiz.sqlite"});

//importar la definicion de la tabla Quiz de quiz.js
//var Quiz = sequelize.import(path.join(_dirname, 'quiz'));


var url, storage;

if (!process.env.DATABASE_URL) {
    url = "sqlite:///";
    storage = "quiz.sqlite";
} else {
    url = process.env.DATABASE_URL;
    storage = process.env.DATABASE_STORAGE || "";
}

var sequelize = new Sequelize(url, {storage: storage});

// Importar la definicion de la tabla Quiz de quiz.js
var Quiz = sequelize.import(path.join(__dirname, 'quiz'));

// Crear tablas
sequelize.sync()
.then(function(){
	console.log('Bases de datos creadas con éxito');
})
.catch(function (error){
	console.log("Error creando las tablas de las BBDD:", error);
});



exports.Quiz = Quiz; // exportar definición de tabla Quiz
