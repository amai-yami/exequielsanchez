function sumar(num1,num2){
    let resultado = num1+num2;
    console.log(resultado);
}

function suma1(){
    let num1=document.getElementById("s1").value;
    let num2= document.getElementById("s2").value;
    let resultado=Number(num1)+Number(num2);
    console.log(resultado);

    document.getElementById("r1").innerHTML = 'resultado:'+resultado;
    
     
    
   

    if(num1>=num2){
        alert("el mayor es "+num1);
    }
       
    else{
        alert("el mayor es "+num2);
    }
     document.getElementById("s1").value="";
     document.getElementById("s2").value="";
    
}