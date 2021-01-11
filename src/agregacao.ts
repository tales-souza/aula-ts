export class CarrinhoDeCompras{
    private readonly produtos: Produto[] = [];

   public inserirProdutos(...produtos: Produto[]){
        for (let produto of produtos){
            this.produtos.push(produto);
        }
    }

    public quantidadeProdutos(): number {
        return this.produtos.length;
    }

    public valorTotal() : number {
        return this.produtos.reduce((soma, produto)=>
        soma + produto.preco, 0)
    }


}

export class Produto {
    constructor(private _nome: string, private _preco: number)  {}

    get nome(): string{
        return this._nome;
    }

    get preco(): number{
        return this._preco;
    }
}

const produto1 = new Produto("Máquina de Lavar", 1.500);
const produto2 = new Produto("TV de tela plana", 3.350);
const produto3 = new Produto("Caneca", 8.50);
const produto4 = new Produto("Leite ninho", 4.75);

console.log(produto1.nome);
console.log(produto1.preco);
const carrinhoDeCompras = new CarrinhoDeCompras();
carrinhoDeCompras.inserirProdutos(produto1);
carrinhoDeCompras.inserirProdutos(produto2);
carrinhoDeCompras.inserirProdutos(produto3);
carrinhoDeCompras.inserirProdutos(produto4);


console.log(carrinhoDeCompras);
console.log(carrinhoDeCompras.quantidadeProdutos());
console.log(carrinhoDeCompras.valorTotal());
