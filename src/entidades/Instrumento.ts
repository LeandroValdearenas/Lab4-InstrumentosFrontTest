import CategoriaInstrumento from "./CategoriaInstrumento";

export default class Instrumento {
    id:number = 0;
    instrumento:string = "";
    marca:string = "";
    modelo:string = "";
    imagen:string = "";
    precio:number = 0;
    costoEnvio:string = "G";
    cantidadVendida:number = 0;
    descripcion:string = "";
    categoria:CategoriaInstrumento = new CategoriaInstrumento();
    strPrecio?:string = "";
    strCantidadVendida?:string = "";
}