
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
   
   
   
   
   
   
   
   
   
   ];
   
   const form = document.getElementById("quiz");
   
   function crearTodo(quizDogs) {
       
   
   
       
   
   for(let i=0; i<quizDogs.length;i++){
       crearTitulo(i);
       crearRespuestas(i);
   }
   
   
   
   }
   
   
   
   
   function crearTitulo(i,quizDogs) {
   
   let parrafo= document.createElement("p");
       let titulo = parrafo.innerText(quizDogs[i].title);
       parrafo.appendChild(titulo);
   
       return parrafo;
   }
   
   
   
   
   function crearRespuestas(i,quizDogs) {
       for(let j =0; j<quizDogs[i].answers.length;j++){
           let nuevaRespuesta=quizDogs[i].answers[j];
               
           let nuevaLabel =crearLabel(nuevaRespuesta);
           let nuevoInput = crearInput(nuevaRespuesta);
   
   
       }
   
   
   
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