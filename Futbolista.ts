import { Persona } from "./Persona";
export {Futbolista};

class Futbolista extends Persona{
    protected EquipoSimpatizante: string;

    public constructor(pNombre: string, pApellido: string, pDNI: number, pEquipoSimpatizante: string){
        super(pNombre,pApellido,pDNI);
        this.EquipoSimpatizante = pEquipoSimpatizante;
    }

    public setEquipoSimpatizante(pEquipoSimpatizante: string): void{
        this.EquipoSimpatizante = pEquipoSimpatizante;
    }

    public getEquipoSimpatizante():string{
        return this.EquipoSimpatizante;
    }
}