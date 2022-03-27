//
class Pila {
    tamanio: number = 150;
    arrays: number[];
    indexAct: number = 0;
    numElements: number = 0;

    constructor(_tamanio?:number){
        if(_tamanio){
            if(_tamanio > 0){
                this.arrays = new Array(_tamanio);
            } else {
                throw Error('Not data in Array');
            }
        } else {
            this.arrays = new Array(this.tamanio);
        }
    }

    apilar(element: number) : void {
        if(this.numElements === this.arrays.length){
            throw Error('Array is full.');
        } else {
            this.arrays[this.indexAct] = element;
            this.indexAct++;
            this.numElements++;
        }
    }

    desapilar(): number {
        if(this.numElements === 0){
            throw Error('Array is empty.');
        } else {
            this.indexAct--;
            const elements: number = this.arrays[this.indexAct];
            this.numElements--;
            return elements;
        }
    }
}

const pila: Pila = new Pila();
const pila2: Pila = new Pila(20);
// see size Array
console.log(pila.arrays.length);
console.log(pila2.arrays.length);

pila.apilar(25);
pila.apilar(11);
pila.apilar(87);

let element: number = pila.desapilar();
console.log(element);

element = pila.desapilar();
console.log(element);

element = pila.desapilar();
console.log(element);

// puede recibir cualquier tipo de dato
class ClassGeneric<T>{
    dato?: T;
    constructor(_dato:T){
        this.dato = _dato;
    }
    // se pueden declarar todos lo metodos de cualquier tipo
    DoSomething(parameter:T): T{
        const dato: T = parameter;
        return dato;
    }
}

const generic: ClassGeneric<number> = new ClassGeneric(123);
const generic2: ClassGeneric<string> = new ClassGeneric('No es necesario memorizar todo');