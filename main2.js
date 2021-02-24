
const quizDogs = [
{ 

title : "¿Cuál es la raza más inteligente?",
answers: [

    {
        label: "Border  Collie",
        id: "border-collie",
        name: "inteligentRace",
        value: "border-collie"

    },
    
    {
        label: "Pastor  Alemán",
        id: "pastor-aleman",
        name: "inteligentRace",
        value: "pastor-aleman"

    },
    
    {
        label: "Dogo Argentino",
        id: "dogo-argentino",
        name: "inteligentRace",
        value: "dogo-argentino"

    },
    
    {
        label: "Pastor Belga",
        id: "pastor-belga",
        name: "inteligentRace",
        value: "pastor-belga"

    }

],

answerTrue : "border-collie"



},

{ 
            
title : "¿Cuál es la raza más peligrosa?",
answers: [

    {
        label: "Presa Canario",
        id: "presa-canario",
        name: "dagerousRace",
        value: "presa-canario"

    },
    
    {
        label: "Rottweiler",
        id: "rottweiler",
        name:  "dagerousRace",
        value:  "rottweiler"

    },
    
    {
        label: "Pitbull",
        id: "pitbull",
        name: "dagerousRace",
        value: "pitbull"

    },
    
    {
        label: "American Staffordshire Terrier",
        id: "american-staffordshire",
        name:  "dagerousRace",
        value: "american-staffordshire"

    }

],

answerTrue : "pitbull"



},








];







   
   const form = document.getElementById("quiz");

function imprimir (quizDogs, form) {
    let crearFieldset = document.createElement("fieldset");
    crearFieldset.setAttribute("class", "fieldsetStyle");
    form.appendChild(crearFieldset);
    imprimirPregunta (createFieldset, quizDogs);
    //caja
    
    
}


   
   function imprimirPregunta(crearFieldset, quizDogs) {
    let crearLegend = document.createElement("legend");
    crearLegend.setAttribute("class", "legentStyle");
    //titulo esta dentro de legend
   
    crearFieldset.appendChild(crearLegend);


       for (let i=0; i<quizDogs.length;i++){
             let pregunta= quizDogs[i];
        //tenemos que recorrer un for para recorrer el array y encontrar la info que queremos para titulo y respuestas pero... el appenchild debe estar dentro del for o se debe hacer fuera???       
        crearLegend.appendChild( crearTitulo(pregunta));

          crearFieldset.appenChild(crearTodasLasRespuestas(pregunta));
         

       }
   
   }
       
   function crearTodasLasRespuestas(pregunta) {
    //    //para crear todas las respuestas de una pregunta
    // crearTitulo(i);
    let divAllAnswers = document.createElement("div");
    divAllAnswers.setAttribute("id", "divAllAnswers");
   for(let j=0; j<pregunta.answers.length;j++){
      //pregunta.answers (se recogería asi o hay que poner pregunta[answers])
       let answerOfaQuestion = pregunta.answers[j];
   // return de [crearTitulo, crearRespuestas]?
   //esto serí a [parrafo, [label, input]];
   divAllAnswers.appendChild(crearRespuestas(answerOfaQuestion));



    
        return divAllAnswers;
    
    
        }
   
   
}
   
   
   
   
   
   function crearTitulo(pregunta) {
   
   let parrafo= document.createElement("p");
       let titulo = parrafo.innerText(pregunta.title);
       parrafo.appendChild(titulo);
   
       return parrafo;
   }
   
   
  
   function crearRespuestas(answerOfaQuestion) {

       let divCajaAnswer = document.createElement("div");

       divCajaAnswer.setAttribute("id", "divCajaAnswer");

       for(let k =0; k<answerOfaQuestion.answers.length;k++){
           let nuevaRespuesta=answerOfaQuestion.answers[k];
               
           let nuevaLabel =crearLabel(nuevaRespuesta);
           let nuevoInput = crearInput(nuevaRespuesta);


            
   
       }
   
        divCajaAnswer.appendChild(nuevaLabel);
        divCajaAnswer.appendChild(nuevoInput);
        return divCajaAnswer;
   
   }
   
   function crearInput(nuevaRespuesta) {
       let input = document.createElement("input");
       input.setAttribute("id", nuevaRespuesta.id);
       input.setAttribute("type", "radio");
       input.setAttribute("name", nuevaRespuesta.name);
       input.setAttribute("value", nuevaRespuesta.value);
   
   
       return input;
   }
   
   function crearLabel (nuevaRespuesta){
       let label =document.createElement("label");
       label.setAttribute("for " , nuevaRespuesta.id );
       label.setAttribute("name", nuevaRespuesta.name );
       let texto=document.createTextNode(nuevaRespuesta.label);
       label.appendChild(texto);
   
   
   
   return label;
   
   
   
   
   
   }