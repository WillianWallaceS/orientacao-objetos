//Estudando com TypeScript

const padaria = {
    endereco: 'Rua Dos Peixes Dourados',
    tipo: 'restaurante',
    produtos: [ 
        {nome: 'Arroz', valor:30.0},
        {nome:'Pão', valor:0.60},
         {nome:'Nescau', valor: 10.0},
         {nome:'Açucar', valor:5.0},
        {nome:'Carne moida', valor:-10},
        ],
        getnomeDosProdutos: {this.produtos.map(produtos => produtos.nome)};
    
           
        

};

console.log(padaria);
console.log(padaria.getnomeDosProdutos());