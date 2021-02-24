
const quizDogs = [
    {   title: "¿Cuál es la raza más inteligente?",
        answers: ["Border Collie", "Pastor Alemán", "Dogo Argentino", "Pastor Belga" ],

      true : 0

     },

    { 
            
        title : "¿Cuál es la raza más peligrosa?",
        answers: [ "Presa Canario", "Rottweiler", "Pitbull", "American Staffordshire Terrier"     
                        ],
        true : 2

    }



]


const divQuestion =document.querySelector(".question");
const divAnswers =document.querySelector(".answers");
let flag= 0;


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
      input.setAttribute("value", i);
     
      input.setAttribute("name", "answer");
      input.setAttribute("type", "radio");

    divAnswers.appendChild(input);
    arrayDelete.push(input);
  //Crear label
    let label =document.createElement("label");
    
 
    let textoLabel=document.createTextNode(arrayAllAnswers[i]);
    label.setAttribute("for", i );
    label.appendChild(textoLabel);
   
    //añadimos un evento!
    label.addEventListener("click",
    () => {
        comprueba (questions.true, i, arrayDelete, label );

  });
 
  divAnswers.appendChild(label);
  arrayDelete.push(label);
   }
}
   imprimir(quizDogs[flag]);

//función para comprobar
function  comprueba (answerTrue, answer, arrayDelete, label) {
    if(answerTrue === answer){
        label.classList.add("success");
        flag++;
        
        setTimeout(() => deleteQuestion  (arrayDelete), 3000) ;
        if (flag < quizDogs.length){
            setTimeout(() => imprimir(quizDogs[flag]),3500);
          } else{
                console.log("FIN " );
            }
    }else
    {

                label.classList.add("fail");
            }




    }


function deleteQuestion (arrayDelete){

    for(let i=0; i<arrayDelete.lenght; i++){

        arrayDelete[i].remove();
    }


}