// coleção dinamica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220 

console.log(produto)
delete produto.preco
delete produto['marca da produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Júnior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function() {
        // ...
    }
}
delete carro.condutores
carro.proprietario.endereco.numero = 419
carro['proprietario']['endereco']['logradouro'] = 'Av.Gigante'
console.log(carro)
console.log(carro.condutores)