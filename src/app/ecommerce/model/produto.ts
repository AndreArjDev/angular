export class Produto {

  constructor(
    public id?: number,
    public nome?: string,
    public preco?: number,
    public imagem?: string,
    public quantidade?: number,
  ) {

   }

  alterarQuantidade(quantidade: number): void{
    this.quantidade = quantidade;
  }

  static fromJson(json: any): Produto {
    return Object.assign(new Produto(), json);
  }
}

export interface ProdutoCard {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
}

export class IdQuantidade  {
  id: number;
  quantidade: number;

  constructor (id:number,quantidade:number) {
    this.id = id;
    this.quantidade = quantidade
  }

}
