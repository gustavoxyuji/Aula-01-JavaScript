//Declaração de variáveis

const c = 50;

var a = 1;
let b = 2;
let d = 10;

console.log(a, b, c, d);

//Tipo de variáveis - Númericas

const ano = 1991;
let atrasoEmSegundos = 0.000016;
let area = (16 * 3, 14);
let metadearea = area / 2;

console.log("Ano:" + ano);
console.log("Atraso:" + atrasoEmSegundos);
console.log("Area:" + area);
console.log("Metade da area:" + metadearea);

//Tipo de variáveis - String e typeof

let pais = "Brasil";
let continente = "América do Sul";

console.log(pais);
console.log(typeof pais);
console.log(continente);
console.log(typeof continente);

let message1 = "O navio 'Mars' fez escala no porto.";
let message2 = "Chuva forte passará perto da cidade de São Paulo.";

console.log(message1);
console.log(message2);

//String = Template Literals

let nome = "João";
let idade = 30;

let mensagem = `Olá, meu nome é ${nome} e tenho ${idade} anos.`;
console.log(mensagem);

//String - Outras operações

let texto = "JavaScript";
console.log(texto.charAt(4)); //exibe S

let frase1 = "O gato subiu no telhado e depois pulou";
console.log(frase1.indexOf("gato")); //exibe 2
console.log(frase1.lastIndexOf("pulou")); //exibe 33

let palavra = "abcdefgh";
console.log(palavra.substring(2, 5)); //exibe cde

let texto1 = "Esta é uma String.";
console.log(texto1.slice(5, 7)); //exibe é

let lista = "maça, banana, laranja";
let frutas = lista.split(",");
console.log(frutas); //exibe [ 'maça', ' banana', ' laranja' ]

let frase2 = "O JavaScript é incrivel!";
let novafrase = frase2.replace("JavaScript", "Python");
console.log(novafrase); //exibe "O Python é incrivel!"

let texto2 = "JavaSCRIPT";
console.log(texto2.toLowerCase()); //exibe javascript
console.log(texto2.toUpperCase()); //exibe JAVASCRIPT

let texto3 = "  Espaços ao redor  ";
console.log(texto3.trim()); //exibe "Espaços ao redor"

//Funções em JavaScript

function soma(a, b) {
  return a + b;
}

resultadoSoma = soma(1, 2);
console.log("Resultado da soma: " + resultadoSoma); //exibe 3

let multiplicar = function (a, b) {
  return a * b;
};
console.log(multiplicar(4, 3)); //exibe 12

//Objetos

let usuario1 = {};
console.log(usuario1);
console.log(typeof usuario1);

let usuario2 = {
  nome: "João",
  sobrenome: "da Silva",
  idade: 18,
  email: "joaod@email.com",
};

console.log(usuario2.nome + " " + usuario2.sobrenome);
console.log(usuario2.idade);
console.log(usuario2.email);

let usuario3 = {
  nome: "Maria",
  sobrenome: "da Silva",
  idade: 25,
  email: "maria@email.com",
};

console.log(usuario3.nome + " " + usuario3.sobrenome);
usuario3.idade = 30;
console.log(usuario3.idade);

//Objetos - Funções

let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  acelerar: function () {
    console.log("O carro está acelerando!");
  },
};

carro.acelerar();
