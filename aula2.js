//Comentário de linha

/*
   Multiplas linhas
*/

var cidade = "curitiba";

var cidades = new Array("Curitiba", "Pinhais", "Colombo", 123);
cidades.push("Araucaria");

console.log(cidades);

var ini = 0;
var ult = cidades.length -1;
 

while (ini <= ult)
{
   console.log(cidades[ini]);
   
   ini++;
}

//Decrescente
var ult = 0;

for (var ini= cidades.length -1; ini >= ult; ini--)
{
   console.log(cidades[ini]);
}


