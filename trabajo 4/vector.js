let miarray=[ 33,'fruta',true,43];

function ver(){

    console.log(miarray[1]);

    console.log(miarray.length);

   


}
miarray[1]='pera';
   

//for(let i=0;i<miarray.length;i++){

  //  console.log(miarray[i]);

//}
miarray.forEach(Element=>{
      console.log(Element)
});


miarray.push('sandia');
miarray.unshift('naranja')
console.log(miarray);

miarray.pop();
miarray.forEach(function(elemento,indice,array){

console.log(elemento,indice);



});

miarray.sort(console.log);