import {Area} from './Area';

export class Cine{
  private _cineid: BigInteger;
  private _nombre: string;
  private _fecha_alta: Date;
  private _fecha_modificacion: Date;
  private _registro_activo: boolean;


  constructor() {
    this._cineid=null;
    this._nombre = null;
    this._fecha_alta = null;
    this._fecha_modificacion = null;
    this._registro_activo = null;
  }

  get cineid(): BigInteger {
    return this._cineid;
  }

  set cineid(value: BigInteger) {
    this._cineid = value;
  }


  get nombre(): string {
    return this._nombre;
  }

  set nombre(value: string) {
    this._nombre = value;
  }



  get fecha_alta(): Date {
    return this._fecha_alta;
  }

  set fecha_alta(value: Date) {
    this._fecha_alta = value;
  }

  get fecha_modificacion(): Date {
    return this._fecha_modificacion;
  }

  set fecha_modificacion(value: Date) {
    this._fecha_modificacion = value;
  }

  get registro_activo(): boolean {
    return this._registro_activo;
  }

  set registro_activo(value: boolean) {
    this._registro_activo = value;
  }
}
