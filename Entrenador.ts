import{Persona} from "./Persona";
export {Entrenador};

class Entrenador extends Persona{
    protected metodoEntrenamiento: string;
    protected experiencia: string;

    public constructor(pNombre: string, pApellido: string, pDNI: number, 
        pMetodoEntrenamiento: string, pExperiencia: string){
        super(pNombre,pApellido,pDNI);
        this.metodoEntrenamiento = pMetodoEntrenamiento;
        this.experiencia = pExperiencia;
    }

    public setMetodoEntrenamiento(pMetodoEntrenamiento: string): void{
        this.metodoEntrenamiento= pMetodoEntrenamiento;
    }

    public getMetodoEntrenamiento(): string{
        return this.metodoEntrenamiento;
    }

    public setExperiencia(pExperiencia: string): void{
        this.experiencia= pExperiencia;
    }

    public getExperiencia(): string{
        return this.experiencia;
    }
}