const quizDogs = [
    { 
    
    title : "¿Cuál es la raza más inteligente?",
    answers: [  "border-collie", "pastor-aleman",  "dogo-argentino","pastor-belga" ],
    answerTrue : "border-collie"
    },
    
    { 
                
    title : "¿Cuál es la raza más peligrosa?",
    answers: [  "presa-canario", "rottweiler","pitbull", "american-staffordshire"  ],
   
    answerTrue : "pitbull"
    
    },

    {
    title : "¿Cuál es la raza más grande?",
    answers: [  "dogo-argentino", "rottweiler","pitbull", "boxer"  ],
   
    answerTrue : "dogo-argentino"
    
    },

    {
        title : "¿Cuál es la raza más pequeña?",
        answers: [  "dogo-argentino", "dalmata","pequines", "boxer"  ],
       
        answerTrue : "pequines"
        
        },

        {
            title : "¿Cuál es la raza más antigua?",
            answers: [  "dogo-argentino", "basenji","pequines", "boxer"  ],
           
            answerTrue : "basenji"
            
            }
    
    ];
    

  const divContenedor = document.getElementById("quiz");
 let flag=0;
   
       function imprimirPregunta(pregunta) {
   
            divContenedor.appendChild(crearTitulo(pregunta));
            console.log(crearTitulo(pregunta))

        divContenedor.appendChild(crearTodasLasRespuestas(pregunta.answers));
    
           }

       function crearTodasLasRespuestas(pregunta) {
      
     let divAllAnswers = document.createElement("div");
        divAllAnswers.setAttribute("id", "divAllAnswers");
    
                    for(let i=0;i<pregunta.length;i++){
                     console.log(pregunta[i]);
          divAllAnswers.appendChild(crearRespuesta(pregunta[i]));
    
                           
                    
                        }
                        
                        return divAllAnswers;
       
    }

       function crearTitulo(pregunta) {
       
       let parrafo= document.createElement("p");
           let titulo = document.createTextNode(pregunta.title);
           parrafo.appendChild(titulo);
       
           return parrafo;
       }   
     
       function crearRespuesta(answerOfaQuestion) {
    
           let divCajaAnswer = document.createElement("div");
        
           divCajaAnswer.setAttribute("id", answerOfaQuestion);
        
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
       
       function crearInput(answerOfaQuestion) {
           let input = document.createElement("input");
           input.setAttribute("id", answerOfaQuestion);
           input.setAttribute("type", "radio");
           input.setAttribute("name", answerOfaQuestion);
           input.setAttribute("value", answerOfaQuestion);
       
       
           return input;
       }
  
       function crearLabel (answerOfaQuestion){
           let label =document.createElement("label");
           label.setAttribute("for" , answerOfaQuestion);
           label.setAttribute("name", answerOfaQuestion );
           let texto=document.createTextNode(answerOfaQuestion);
           label.appendChild(texto);
       
      
       
       return label;
       
       
       
       
       
       }

//funcion comprobar 
function  comprueba (answerTrue, answer, arrayDelete, div) {
    if(answerTrue === answer){
        div.classList.add("success");
        flag++;
        
        setTimeout(() => deleteQuestion  (arrayDelete), 3000) ;
        if (flag < quizDogs.length){
            setTimeout(() => imprimir(quizDogs[flag]),3500);
          } else{
                console.log("FIN " );
            }
    }else
    {

                div.classList.add("fail");
            }




    }

    function deleteQuestion (arrayDelete){

        for(let i=0; i<arrayDelete.lenght; i++){
    
            arrayDelete[i].remove();
        }
    
    }

//------------------main ---------------------------
       imprimirPregunta (quizDogs[flag]); 
    
    //    divCajaAnswer.addEventListener("click",
    //    ()=>{
  
    //       comprueba (quizDogs, answer) 
  
    //   });