
// nameCosas = document.getElementsByName("elminster");
const respuestas = {
    elminster: "mago"
}




// console.log(nameCosas[i]);
// }

nameCosas= document.getElementsByName("elminster");
// nameCosas.addEventListener("click", comprobar()); 
for(let i=0; i<nameCosas.lenght; i++ ){
    nameCosas[i].addEventListener("click", () =>{
        console.log(nameCosas[i]);
        if(nameCosas[i].checked==true){
                    comprobar();
        }else{
            alert("tienes que escoger una opción");
        }
    

    });
  

console.log(nameCosas);

function comprobar() {
    if(this.value ==respuestas.elminster ){
       
        console.log (this.value);
 
 }else{
     console.log("no es la respuesta");
 }
 

}
}