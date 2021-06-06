

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //alert(Obrigado por clicar);
}

function redirecionar(){
    window.open("https://www.google.com/");
    //Abre a página em uma outra página.
    //window.location.href = "https://www.google.com/";
    //Abre a página no mesmo navegador.
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //Inserir (this) no html para função em todas as frases "Obrigado por passar o mouse"
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //Criou a função de trocar a frase ao passar o mouse.
    //alert("Trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //Inserir (this)) no html para função em todas as frases "Passe o mouse aqui"
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    //Criou a fução de voltar a frase ao tirar o mouse.
}

function load(){
    alert("Olá");
}

function funcaochange(elemento){
    console.log(elemento.value)
}

/*function soma(n1, n2){
    return n1 + n2;
}
*/

/*
function validaidade(idade){
    var validar;
    if (idade >= 18){
        validar = true; 
    }else{
        validar = false 
    }
    return validar
}

var idade = prompt("Qual sua idade?");
console.log(validaidade(idade));
*/

//alert(soma(5,10));
//var d = new Date();
//alert(d.getMonth()+1);


/*
var count;
for(count=0; count<= 5; count++){
    alert(count);
}
*/

/*
var count = 0
while (count <=5){
    console.log(count);
    alert(count);
    count++;
};
*/

/*
var idade = prompt("Qual é a sua idade");
if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};
*/

/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista[0]);
//console.log(lista.toString()[0]);
//console.log(lista.join(" - "));


//var nome = " Letícia Duarte";
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem" + idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"));
