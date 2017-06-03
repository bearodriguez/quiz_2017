var path = require('path');

// Cargar ORM
var Sequelize = require('sequelize');
// Para usar en local BBDD SQLite:
   // DATABASE_URL = sqlite:///
  // DATABASE_STORAGE = quiz.sqlite
// Para usar en Heroku BBDD Postgres:
//    DATABASE_URL = postgres://user:passwd@host:port/database

// Usando BBDD SQLite
//var sequelize = new Sequelize("sqlite:///", {storage: "quiz.sqlite"});

//importar la definicion de la tabla Quiz de quiz.js
//var Quiz = sequelize.import(path.join(_dirname, 'quiz'));

// Crear tablas
/*sequelize.sync()
.then(function(){
	console.log('Bases de datos creadas con éxito');
})
.catch(function (error){
	console.log("Error creando las tablas de las BBDD:", error);
});

exports.Quiz = Quiz; // exportar definición a la tabla Quiz
*/
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


exports.Quiz = Quiz; // exportar definición de tabla Quiz
