// Interfaces y clases abstractas
/*
Interfaces ayudan a darle formato o estructura a nuestras clases
En una interfaz no tiene una implementacion, solo tiene los metodos que
van a implementar las clases derivadas, no se tiene modificadores de acceso
*/
// Una clase abstracta-es cuando no se quiere que la clase sea instanciada

// esta es una funcion que indica que tiene dos parametros y devuelve un tipo numerico
type fn = (n1:number, n2:number) => number;
let sum : fn;

sum = (n1:number, n2:number) => {
    return n1 + n2;
}

// esto tambien es valido y es igual al anterior
interface fn_ {
    (n1:number, n2:number): number;
}

let sum_ : fn_;

// una interfaz se puede implementar mas de una vez
interface Figura extends Calculator{
    readonly color: string;
    shapeName?: string;
    Dibujar(): void;
}

interface Calculator {
    CalcularArea(): number;
}

class FiguraBase {
    protected colorFigura: string = 'black';
    ObtenerArea(): void{
        console.log('Obtener Area');
    }

    //ObtenerTop(): void;
}

// una clase solo se extiende una sola vez
class Circulo extends FiguraBase implements Figura  {
    color: string = 'blue';
    CalcularArea(): number {
        throw new Error("Method not implemented.");
    }
    // cuando una clase implementa una interfaz debe tener la misma estructura.
    Dibujar(): void{
        console.log('Dibujando Circulo');
    }
}

class Linea implements Figura {
    color: string = 'yellow';
    shapeName: string = 'ABC Linea';
    constructor(shapeName:number){
        if(shapeName){
            this.shapeName = 'My name is ' + shapeName;
        } else {
            this.shapeName = 'Untitled';
        }
    }
    CalcularArea(): number {
        throw new Error("Method not implemented.");
    }
    Dibujar(): void {
        console.log('Dibujando Circulo');
        //throw new Error("Method not implemented.");
    }
}

// una interfaz no es un objeto
const c: Figura = new Circulo();
//const l: Figura = new Linea();

let f: Figura = c;
//f=l;

c.Dibujar();
//l.Dibujar();

const fBase: FiguraBase = new FiguraBase();
fBase.ObtenerArea();