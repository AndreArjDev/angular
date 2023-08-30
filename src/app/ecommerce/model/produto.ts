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
    console.log(quantidade)
    quantidade===1?
     this.quantidade! += quantidade :
     this.quantidade = quantidade
  }

  static fromJson(json: any): Produto {
    return Object.assign(new Produto(), json);
  }
}
