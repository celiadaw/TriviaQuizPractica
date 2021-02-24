



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
         
                if(inputAnswer[i].checked==true){
                  
                    let answer=inputAnswer[i].value;

                            let nameQuiz= inputAnswer[i].name;
                        
                            comprobar(answer, nameQuiz);
                }else{

                   
                    alert("tienes que escoger una opción");
                }
            
        
            });
        
        }
    }

   
    function comprobar(answer, nameQuiz) {
      
        let trueOrFalse=false;
             if(answer == answersQuiz[nameQuiz]){
                 console.log("Son iguales  "+answer);

                    trueOrFalse=true;
     
      }

        
        
      addColor(answer, trueOrFalse);
    
    }


function  addColor (answer, trueOrFalse){

 let allLabel=   document.getElementsByTagName("label");
 
 console.log(allLabel);
 console.log(answer +"answer");
for(let i=0;i<allLabel.length;i++){
/
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
