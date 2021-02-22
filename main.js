//-----------------variables y constantes--------------




const answersQuiz = 
    [
      
      {  inteligentRace: "borderCollie"},
       {dangerousRace: "borderCollie"},
        {bigRace: "borderCollie"},
        {smallRace: "borderCollie"},
        {ancientRace: "basenji"}

    ];




// const answer = document.getAtrribute ("value").value;

// console.log(question);

//---------DATA



//tene
//--------------------------funciones----------------------------------

function validation (answer){
    if(answer ==null){

        alert ("Selecciona una respuesta");
            return false;
    }
    return true;


}

function trueOrFalse (answer, anwersQuiz){
//recorremos el objeto para comparar la respuesta que han pulsado con la de nuestro objeto
//si coincide se pone en verde si no en rojo
    validation();

//con estas dos variables contamos el numero de fallos y aciertos que tiene
let numberFail=0;
let numberSuccess=0;

// for( let property in anwersQuiz ){
//         console.log("answer "+answer);
//         console.log("answerQuiz array obj "+anwersQuiz[property]);
//         if (answer == anwersQuiz[property]){
//             console.log("la respuesta "+answer+ " es correcta");
//             answer.classList.add("success");
//             numberFail+=1;
    
//     }else{
//         answer.classList.add("fail");
//         console.log("la respuesta "+answer+ " es incorrecta");
//         numberSuccess+=1;
    
//     }
//       }
  
        

// }



//hay que controlar el que no se refresque y el validar
//podemos recoger las respuestas en un array/objeto y cuando termine hasta la última pregunta 
//forzamos el refresco le enviamos a otra página  y le decimos su puntuación total


//en el caso 
function sendAnswers(){

 let  





}
//-----------------------------main------------------------


//NO ESTOY RECOGIENDO BIEN EL VALOR


//el usuario puede hacer click en cualquiera de las 4 opciones ... entonces no se que elemento tengo que recoger exactamente 

//esto crea una NodeList con el label y el resto de opciones  de 0 a 5;
let answers =document.getElementsByName("inteligentRace");
console.log(answers);
//de aqui sacamos el elemento 1 de ese  nodeList
answerSelect =answers.item(1).value;
console.log (answers.item(1).value);




// answer.addEventListener(click,trueOrFalse);

function compruebaOpcion (){
let nameOfQuestion =0;
for(let i=0; i<answersQuiz.length;i++){
nameOfQuestion = Object.getOwnPropertyNames(answersQuiz[i]);
console.log (nameOfQuestion);
}
return nameOfQuestion;
}
if(validation){
// si se  ha seleccionado una respuesta, queremos ir a la pregunta siguiente




}

nameOfQuestion.addEventListener(click, comprobar)


// answers =document.getElementsByName("inteligentRace")
// .addEventListener("click",trueOrFalse);
// console.log (answers)

flag =1;
function comprobar() {
    

switch (flag) {
    case 1:
      //falta coger el valor del name en relación al array de respuestas y el click añadiendole uno cada vez
            let nameOfQuestion= document.getElementsByName("inteligentRace");
                for (let i=0; i<nameOfQuestion.length;i++){

    if (nameOfQuestion[i] ==answersQuiz[nameOfQuestion]){


    nameOfQuestion.classList.add("success");
    numberFail+=1;

}else{
nameOfQuestion.classList.add("fail");
console.log("la respuesta "+answer+ " es incorrecta");
numberSuccess+=1;

}


                }
                flag++;
        break;
        case 2:
            //falta coger el valor del name en relación al array de respuestas y el click añadiendole uno cada vez
                   nameOfQuestion= document.getElementsByName("dangerousRace");
                      for (let i=0; i<nameOfQuestion.length;i++){
      
          if (nameOfQuestion[i] ==answersQuiz[nameOfQuestion]){
      
      
          nameOfQuestion.classList.add("success");
          numberFail+=1;
      
      }else{
      nameOfQuestion.classList.add("fail");
      console.log("la respuesta "+answer+ " es incorrecta");
      numberSuccess+=1;
      
      }
      
      
                      }
              break;


};
}}
