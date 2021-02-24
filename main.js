//-----------------variables y constantes--------------

// const QuizDogs =[
//     inteligentRace[
    
//     {   question : " Qué raza de perro es considerada más inteligente?  ",

//         answer1: {   label: "borderCollie",
//                 id: "borderCollie",
//             name: "inteligentRace",
//             value: "borderCollie"
//                     },

//        answer2: {   label: "pastorAleman",
//                     id: "pastorAleman",
//                 name: "inteligentRace",
//                 value: "pastorAleman"
//                         } ,           

//        answer3: {   label: "Rottweiler",
//                    id: "Rottweiler",
//                   name: "inteligentRace",
//                     value:"Rottweiler"
//                         } ,     
//      answer4: {   label: "pastor-belga",
//                     id: "pastor-belga",
//                     name: "inteligentRace",
//                     value:"pastor-belga"
//                            } ,           



//     }],


// ]



const answersQuiz = 
    {
      
        inteligentRace: "border-collie",
       dangerousRace: "presa-canario",
        bigRace: "borderCollie",
        smallRace: "borderCollie",
        ancientRace: "basenji"

    };

    let numberFail=0;
    let numberSuccess=0;

 let inputAnswer = document.getElementsByTagName('input'); 


    for(let i=0; i<inputAnswer.length;i++) {

    if (inputAnswer[i].type == 'radio') {
        inputAnswer[i].addEventListener("click",  () =>{
            // console.log(inputAnswer[i]+"pasa");
            //     console.log(inputAnswer[i]);
                if(inputAnswer[i].checked==true){
                    // console.log("este es el valor "+inputAnswer[i].value);
                    // console.log("este es el name "+inputAnswer[i].name);      
                    let answer=inputAnswer[i].value;

                            let nameQuiz= inputAnswer[i].name;
                        // console.log("esta es la variable answer "+answer);
                        // console.log(nameQuiz);
                        // console.log (answersQuiz[nameQuiz] +"esto es de laa respuesta");
                            comprobar(answer, nameQuiz);
                }else{

                    //esto no hace nada.... ¿?¿? 
                    alert("tienes que escoger una opción");
                }
            
        
            });
        
        }
    }

   
    function comprobar(answer, nameQuiz) {
        // console.log(answersQuiz.inteligentRace + "esta es la respuesta de respuestas");
        // console.log(nameQuiz + "esto es lo que no sale");
        // console.log (answersQuiz[nameQuiz]+ " Respuesta correcta");
        // console.log (answer+ " Respuesta del formulario");

        let trueOrFalse=false;
             if(answer == answersQuiz[nameQuiz]){
                 console.log("Son iguales  "+answer);

                    trueOrFalse=true;
     
      }

        //  console.log("Son  diferentes "+answer);
        
      addColor(answer, trueOrFalse);
    
    }


function  addColor (answer, trueOrFalse){

    //aquí estamos intentando recoger las etiquetas label, porque 
    // en el input aunque le asigne una clase con un background color no va ha aparecer, hay que darle el color al label (o a un div), 
    //intentamos recoger todos los label 
 let allLabel=   document.getElementsByTagName("label");
 //la línea siguiente es lo que pone la documentación 
//  document.querySelector('[for=`[answer]`]').className = "foo"
 console.log(allLabel);
 console.log(answer +"answer");
for(let i=0;i<allLabel.length;i++){
//intentaba asignar un id a cada label, en quiz.html ya lo he quitado porque no me funcionaba bien, ya que cuando  en html le asignaba id al label , y le hacia click en estos no ocurría nada (sin embargo cuando le daba click a otra respuesta a la que no habia puesto un id al label, aparecian las trazas de los que le habia clicado anteriormente que tenian id en label)

    console.log(allLabel[i].id);
        if(answer=== allLabel[i].id){

            console.log(" holaaaa "+allLabel[i].id);
            if(trueOrFalse){
            allLabel[i].id.classList.add("success");
         numberSuccess+=1;
            }else{
                console.log(" adios  "+allLabel[i].id);
                allLabel[i].id.classList.add("fail");
             numberFail+=1;
         }


}
    
}

 };
