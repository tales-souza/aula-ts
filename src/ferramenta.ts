export class Escritor {
  private _ferramenta: Ferramenta | null = null;
  constructor(private _nome: string) { }

  setFerramenta(ferramenta: Ferramenta){
    this._ferramenta = ferramenta;
  }

  getFerramenta(){
    return this._ferramenta;
  }

  getNome(){
    return this._nome;
  }

  escrever(){
    if ( this.getFerramenta === null){
      console.log('Escritor não pode escrever sem ferramenta');
      return;
    }else{
      console.log(`${this.getNome()} está escrevendo com a ferramenta ${this.getFerramenta()?.getNome()}`)
    }
  }


}
export abstract class Ferramenta {
  constructor(private _nome: string) { }
  abstract escrever(): void;

  getNome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta{
  escrever(): void{
    console.log(`${this.getNome} está escrevendo...`);
  }
}

const escritor = new Escritor('Tales Monteiro de Souza');;
const caneta = new Caneta('Caneta bic');
escritor.setFerramenta(caneta);
escritor.escrever();


