// Definicion del modelo Quiz:

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('Quiz',
        {
            question: {
                type: DataTypes.STRING,
                validate: {notEmpty: {msg: "Falta Pregunta"}}
            },
            answer: {
                type: DataTypes.STRING,
                validate: {notEmpty: {msg: "Falta Respuesta"}}
            }
        });
};

// Modelo de Quizzes

var quizzes = [
{   id: 1,
    question: "Capital de España",
    answer: "Madrid"
},
{   id: 2,
    question: "Capital de Italia",
    answer: "Roma"
},
{   id: 3,
    question: "Capital de Portugal",
    answer: "Lisboa"
},
{   id: 4,
    question: "Capital de Francia",
    answer: "París"
}];

//Siguiente valor para Id
var nextId= quizzes.length +1;

// Crea un nuevo quiz con los valores pasados como parámetros
exports.create = function(quiz) {
    var quiz = {
        id: nextId++,
        question: (quiz.question || "").tirm(),
        answer: (quiz.answer || "").tirm()
    }

    quizzes.push(quiz);

    return quiz;
};

//Actualiza el quiz pasado como parametro
exports.update = function(quiz){

    var index = quizzes.findIndex(function (q){
        return quiz.id === q.id;
    });

    if (index >= 0){
        quizzes[index] = {
            id: quiz.id,
            question: (quiz.question || "").tirm(),
            answer: (quiz.answer || "").trim()
        };
    }

};

//Devuelve todos los quizzes
exports.findAll = function(){
    return quizzes;
};

//Busca un quiz por su id
exports.findById = function(id) {

    return quizzes.find(function(quiz){
        return quiz.id === q.id;
    });
};

// Elimina un quiz
exports.destroy = function(quiz){

    var index = quizzes.findIndex(function(q){
        return quiz.id === q.id;
    });

    if(index >= 0 ){
        quizzes.splice(index,1);
    }
};

