export interface NovoClienteElement {
  id?: number;
  nome: string;
  telefones: [];
  veiculos: {
    marca: string;
    modelo: string;
    placa: string;
  }[];
}
