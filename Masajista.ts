import {Persona} from "./Persona";
export {Masajista};

class Masajista extends Persona{
    protected tipoMasaje: string;
    
    public constructor(pNombre: string, pApellido: string, pDNI: number, 
        pTipoMasaje: string){
        super(pNombre,pApellido,pDNI);
        this.tipoMasaje = pTipoMasaje;
    }

    public setTipoMasaje(pTipoMasaje: string):void{
        this.tipoMasaje = pTipoMasaje;
    }

    public getTipoMasaje():string{
        return this.tipoMasaje;
    }

    public HacerMasajeA(pPersona: Persona){
        return "Se le hizo Masaje a "+pPersona.getApellido();
    }

}