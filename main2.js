
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

function imprimirTodo (quizDogs, form) {
    let crearFieldset = document.createElement("fieldset");
    crearFieldset.setAttribute("class", "fieldsetStyle");
    form.appendChild(crearFieldset);
    imprimirPregunta (crearFieldset, quizDogs);
    //caja
    
    
}


   
   function imprimirPregunta(crearFieldset, quizDogs) {
    let crearLegend = document.createElement("legend");
    crearLegend.setAttribute("class", "legentStyle");
    //titulo esta dentro de legend
   
    crearFieldset.appendChild(crearLegend);
        console.log("legend "+crearLegend);
        console.log(crearLegend);
    console.log(crearFieldset)


       for (let i=0; i<quizDogs.length;i++){
             
            //  console.log("que es pregunta.answers"+pregunta.answers);

            for(let j=0; j<quizDogs[i].answers.length;j++){
                // let answer = quizDogs[i].answers[j];
                // let pregunta=quizDogs[i].answers[j];
               
                crearFieldset.appenChild(crearTodasLasRespuestas(quizDogs[i].answers[j]));

                }

            }
 
        
        console.log("esto es la variable pregunta dentro del bucle" +pregunta)
             console.log(quizDogs[1])
             console.log(i);

        //tenemos que recorrer un for para recorrer el array y encontrar la info que queremos para titulo y respuestas pero... el appenchild debe estar dentro del for o se debe hacer fuera???       
        crearLegend.appendChild( crearTitulo(pregunta));

          
         

       }
   
   
      
   

   function crearTodasLasRespuestas(pregunta) {
  
 let divAllAnswers = document.createElement("div");
    divAllAnswers.setAttribute("id", "divAllAnswers");


                console.log(quizDogs[0].answers.length);
            let arrayAnswersOfaQuestion = [];
            // console.log(quizanswers.length);
                for(let i=0;i<pregunta.length;i++){
                        console.log("preguntas.answer "+i);
                        console.log("esto "+pregunta.answer[i]);
                        divAllAnswers.appendChild(crearRespuesta(pregunta[i]));

                        return divAllAnswers;
                
                    }
                
   
}
   
   
   
   
   //crear titulo ya funciona
   function crearTitulo(pregunta) {
   
   let parrafo= document.createElement("p");
       let titulo = document.createTextNode(pregunta.title);
       parrafo.appendChild(titulo);
   
       return parrafo;
   }
   
   
  //esta función la realiza bien
   function crearRespuesta(answerOfaQuestion) {

       let divCajaAnswer = document.createElement("div");

       divCajaAnswer.setAttribute("id", "divCajaAnswer");
      //con esta función añadimos a un div llamado CajaAnswer un label con su input correspondiente
               
           let nuevaLabel =crearLabel(answerOfaQuestion);
           let nuevoInput = crearInput(answerOfaQuestion);
            // console.log("label creada "+nuevaLabel);
            // console.log(nuevaLabel);
            // console.log("input creado "+nuevoInput);
            // console.log(nuevoInput);
           divCajaAnswer.appendChild(nuevaLabel);
           divCajaAnswer.appendChild(nuevoInput);
           return divCajaAnswer;
   
       }
   
       
      
   
 //crea input bien
   function crearInput(answerOfaQuestion) {
       let input = document.createElement("input");
       input.setAttribute("id", answerOfaQuestion.id);
       input.setAttribute("type", "radio");
       input.setAttribute("name", answerOfaQuestion.name);
       input.setAttribute("value", answerOfaQuestion.value);
   
   
       return input;
   }
   //crea label bien
   function crearLabel (answerOfaQuestion){
       let label =document.createElement("label");
       label.setAttribute("for" , answerOfaQuestion.id );
       label.setAttribute("name", answerOfaQuestion.name );
       let texto=document.createTextNode(answerOfaQuestion.label);
       label.appendChild(texto);
   
   
   
   return label;
   
   
   
   
   
   }




   //-----------------------main----------------------
   imprimirTodo(quizDogs, form);