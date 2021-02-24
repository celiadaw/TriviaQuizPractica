
const quizDogs = [
    { 

            title : "¿Cuál es la raza más inteligente?",
            answers: ["Border Collie", "Pastor Alemán", "Dogo Argentino", "Pastor Belga" ],

            true : 0

     },

    { 
            
        title : "¿Cuál es la raza más peligrosa?",
        answers: [ "Presa Canario", "Rottweiler", "Pitbull", "American Staffordshire Terrier"     
                        ],
        true : 2

    },



];




const divQuestion =document.querySelector(".question");
const divAnswers =document.querySelector(".answers");
let flag= 0;
let aciertos=0;

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
   
   
   


function imprimir (questions){
 //crear pregunta
 let arrayDelete= [];
    let parrafo= document.createElement("p");
    let textoParrafo = document.createTextNode(questions.title);
    parrafo.appendChild(textoParrafo);
     divQuestion.appendChild(parrafo);
    arrayDelete.push(parrafo);
   //crear Input
   let arrayAllAnswers = questions.answers;
   for (let i = 0; i < arrayAllAnswers.length; i++) {
      let input = document.createElement("input");
      input.setAttribute("id", i);
      input.setAttribute("type", "radio");
      input.setAttribute("name", i);
      input.setAttribute("value", i);
    divAnswers.appendChild(input);
    arrayDelete.push(input);
  //Crear label
    let label =document.createElement("label");
    label.setAttribute("for" , i );
 
    let textoLabel=document.createTextNode(arrayAllAnswers[i]);
    label.appendChild(textoLabel);
    divAnswers.appendChild(label);
    arrayDelete.push(label);
    //añadimos un evento!
    label.addEventListener("click",
    () => {
        comprueba (answerTrue, i, label, arrayDelete)

  })
 
       
   }
   

   imprimir(quizDogs[flag]);

//función para comprobar
function  comprueba (answerTrue, answer, label, arrayDelete) {
    if(answerTrue === answer){
        label.classList.add("success");
        flag++;
        aciertos++;
        setTimeout(() => deleteQuestion  (arrayDelete), 3000) ;
        if (flag < quizDogs){
            setTimeout(() => imprimir(quizDogs[flag]),3500);
          } else{
                console.log("Este es tu resultado: " +aciertos+"/"+quizDogs.lenght);
            }
    }else{

                label.classList.add("fail");
            }




    }
}

function deleteQuestion (arrayDelete){

    for(let i=0; i<arrayDelete.lenght; i++){

        arrayDelete[i].remove();
    }


}
   //-----------------------main----------------------
