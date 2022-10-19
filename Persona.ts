export { Persona};
class Persona{
    protected nombre: string;
    protected apellido: string;
    protected dni: number;

    public constructor(pNombre: string, pApellido: string, pDNI: number){
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.dni = pDNI;
    }

    public setNombre(pNombre: string): void{
        this.nombre= pNombre;
    }

    public getNombre(): string{
        return this.nombre;
    }

    public setApellido(pApellido: string): void{
        this.apellido= pApellido;
    }

    public getApellido(): string{
        return this.apellido;
    }

    public setDNI(pDNI: number):void{
        this.dni= pDNI;
    }

    public getDNI(): number{
        return this.dni;
    }
}