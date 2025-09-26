// Exercício 1
function exercicio1() {
    const numeros = [5, 12, 8, 21, 7];
    let resultado = '';
    numeros.forEach(num => {
        resultado += num + ' ';
    });
    document.getElementById('resposta1').innerText = resultado.trim();
}

// Exercício 2
function exercicio2() {
    const frutas = ['maçã', 'banana', 'laranja'];
    frutas.push('uva');
    frutas.shift();
    document.getElementById('resposta2').innerText = frutas.join(', ');
}

// Exercício 3
function exercicio3() {
    const numeros = [1,2,3,4,5,6,7,8,9,10];
    const pares = numeros.filter(n => n % 2 === 0);
    document.getElementById('resposta3').innerText = pares.join(', ');
}

// Exercício 4
function exercicio4() {
    const numeros = [13, 7, 22, 5, 19, 31, 2];
    const maior = Math.max(...numeros);
    document.getElementById('resposta4').innerText = 'Maior valor: ' + maior;
}
// Exercício 5
function exercicio5() {
    const numeros = [4, 7, 12, 3, 9];
    const soma = numeros.reduce((total, num) => total + num, 0);
    document.getElementById('resposta5').innerText = 'Soma dos elementos: ' + soma;
}
// Exercício 6
function exercicio6() {
    const pessoa = {
        nome: 'Ana',
        idade: 25,
        profissao: 'Engenheira'
    };
    let texto = `Nome: ${pessoa.nome}<br>Idade: ${pessoa.idade}<br>Profissão: ${pessoa.profissao}`;
    document.getElementById('resposta6').innerHTML = texto;
}

// Exercício 7
function exercicio7() {
    const carro = {
        marca: 'Toyota',
        modelo: 'Corolla',
        ano: 2018
    };
    carro.ano = new Date().getFullYear();
    let texto = `Marca: ${carro.marca}<br>Modelo: ${carro.modelo}<br>Ano: ${carro.ano}`;
    document.getElementById('resposta7').innerHTML = texto;
}

// Exercício 8
function exercicio8() {
    const livro = {
        titulo: 'O Pequeno Príncipe',
        autor: 'Antoine de Saint-Exupéry'
    };
    livro.anoDePublicacao = 1943;
    let texto = `Título: ${livro.titulo}<br>Autor: ${livro.autor}<br>Ano de Publicação: ${livro.anoDePublicacao}`;
    document.getElementById('resposta8').innerHTML = texto;
}

// Exercício 9
function exercicio9() {
    const produto = {
        nome: 'Notebook',
        preco: 3500,
        quantidade: 5
    };
    let texto = '';
    for (let prop in produto) {
        texto += `${prop}: ${produto[prop]}<br>`;
    }
    document.getElementById('resposta9').innerHTML = texto;
}// Exercício 10
function exercicio10() {
    const estudante = {
        nome: 'Carlos',
        idade: 20,
        curso: 'Matemática'
    };
    const frase = `O estudante ${estudante.nome} tem ${estudante.idade} anos e está cursando ${estudante.curso}.`;
    document.getElementById('resposta10').innerText = frase;
}

// Exercício 11
function exercicio11() {
    const livros = [
        { titulo: 'Dom Casmurro', autor: 'Machado de Assis', anoDePublicacao: 1899 },
        { titulo: 'O Hobbit', autor: 'J.R.R. Tolkien', anoDePublicacao: 1937 },
        { titulo: '1984', autor: 'George Orwell', anoDePublicacao: 1949 }
    ];
    const titulos = livros.map(livro => livro.titulo).join(', ');
    document.getElementById('resposta11').innerText = titulos;
}

// Exercício 12
function exercicio12() {
    const carros = [
        { marca: 'Fiat', modelo: 'Uno', ano: 2010 },
        { marca: 'Ford', modelo: 'Ka', ano: 2015 },
        { marca: 'Chevrolet', modelo: 'Onix', ano: 2018 }
    ];
    const anoAtual = new Date().getFullYear();
    carros.forEach(carro => carro.ano = anoAtual);
    let texto = carros.map(carro => `${carro.marca} ${carro.modelo} - Ano: ${carro.ano}`).join('<br>');
    document.getElementById('resposta12').innerHTML = texto;
}

// Exercício 13
function exercicio13() {
    const pessoas = [
        { nome: 'João', idade: 28, cidade: 'São Paulo' },
        { nome: 'Maria', idade: 35, cidade: 'Rio de Janeiro' },
        { nome: 'Pedro', idade: 22, cidade: 'Belo Horizonte' }
    ];
    const pessoaMaior30 = pessoas.find(pessoa => pessoa.idade > 30);
    let texto = pessoaMaior30 ? `Pessoa com mais de 30 anos: ${pessoaMaior30.nome}` : 'Nenhuma pessoa encontrada.';
    document.getElementById('resposta13').innerText = texto;
}
