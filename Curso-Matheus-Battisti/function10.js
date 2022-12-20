/*        Funções       */


/* Palavra resevarda e function   */


function dizernome(nome){
    console.log("Seu nome é : " + nome);
}


dizernome("Caio");// chamando a function e tambem colocando o paramentro nome 
dizernome("Mafra");
dizernome("Anne");


console.log("Soma com function")


function soma(x , y ){

var soma = x * y ;
console.log(soma)
return  soma //retunr a linha 22 com a soma 

}


console.log(" A soma e " + soma( 5,8))// exe a function e mandando o parametro com numbers 
