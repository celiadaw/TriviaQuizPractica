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

for( let property in anwersQuiz ){
        console.log("answer "+answer);
        console.log("answerQuiz array obj "+anwersQuiz[property]);
        if (answer == anwersQuiz[property]){
            console.log("la respuesta "+answer+ " es correcta");
            answer.classList.add("success");
            numberFail+=1;
    
    }else{
        answer.classList.add("fail");
        console.log("la respuesta "+answer+ " es incorrecta");
        numberSuccess+=1;
    
    }
      }
  
        

}



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
let answers =document.getElementsByTagName("input");

let answer = document.getElementById();
console.log(answer);
answer.addEventListener(click,trueOrFalse);




let nameOfQuestion = Object.getOwnPropertyNames(answersQuiz[0]);
console.log (nameOfQuestion);
if(validation){
// si se  ha seleccionado una respuesta, queremos ir a la pregunta siguiente




}

//para saber lo primero donde estamos, primera pregunta etc, tendremos que hacer una bandera 
// que nos cuente las veces que se le dieron click Ç(y controlar las veces que se han dado correctamente primero, esto es , siempre y cuando se le de a  una opcion falta o verdadera y se marque se añade un incremento al iterador bandera, para saber si estamos en la pregunta 1 o en la 5)
//si la bandera esta en la numero 1 tendremos que comparar el name con el primer elemento de answerquiz
// y si el valor de la opcion seleccionada es igual al valor del primer elemento de answerquiz se pone en verde y si es otro se pone en rojo

