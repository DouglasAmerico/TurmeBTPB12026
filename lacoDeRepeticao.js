let texto="";

for (let index = 0; index <= 10; index++) {
    if(index == 10){
        texto = texto + index;    
    }else{
        texto = texto + index + ",";
    }
}

console.log(texto);