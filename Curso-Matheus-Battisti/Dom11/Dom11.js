/*let lista = ["Blue","Red " , "Black" ," Orange" , "Pink"]

var listaul = document.createElement("ul");

var body = document.getElementsByTagName('body');

body[0].appendChild(listaul);

var listaBody  = document.getElementsByTagName('ul');

console.log(listaBody[0]);

/* Usando um for para percorre um array      

for( var i = 0 ; i < lista.length ; i++){

var lifor = document.createElement('li') //Criou

var textoi = document.createTextNode(lista[i]); // Criou texto

lifor.appendChild(textoi);

listaBody[0].appendChild(lifor);


console.log(lifor)




}


/*   Essa foi a forma que achei para fazer um for ir para o dom */ 
/*
let desejos = ["Carro" , "Casa " , "Deus " , "Fé" , "EUA" ];

let ul = document.createElement('ul'); // Criado uma lista ul 


var bodylista  = document.querySelector('body');
bodylista.appendChild(ul);

for(let i = 0 ; i < desejos.length ; i++) { 

var li = document.createElement('li');

ul.appendChild(li)

li.innerHTML = desejos[i]



}

*/






