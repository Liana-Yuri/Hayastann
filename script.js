



let  acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
        this.classList.toggle("active");    
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });  
}



function calcular(){
  let edad,genero;precio; 
 
		precio = 100;
		//Miramos el genero
		genero = document.formulario.genero.value;
		if(genero == "hombre"){
			precio = precio + 25;
		}
 //Miramos la edad
 edad = document.formulario.edad.value;
 edad = parseInt(edad);
 if(edad < 25){
   precio = precio - 20;
 }
  }
  //Consultamos si ha elegido dosnacionalidad		
  if(document.formulario.dosnacionalidad.checked == true){
    
    precio = precio + 40;
  }	
  //Consultamos si ha elegido spa		
  if(document.formulario.coche.checked == true){  
    precio = precio + 60;
  }	
  //Consultamos si ha elegido zumba		
  if(document.formulario.zumba.checked == true){
    precio = precio + 30;
  }	
  document.formulario.precio.value = precio + "€";	
}
function enviar(){
  var repuesta,precio;
  precio = document.formulario.precio.value;
  respuesta = confirm("Su precio es " + precio + "\n¿Desea continuar?");
  if(respuesta == true){
    document.formulario.submit();
  }
}





 


  
    
  
     
        
  
