// crea nuevos tipos de datos
class Rectangulo{
    // sirve para pasar los parametros y asignarlos dentro del codigo.
    constructor(public baseRectangulo: number, public alturaRectangulo: number, color: string){

    }
    // declarar metodos en una clase - una funcion similar a js
    // este es un ejemplo de metodo en typescript para una clase :)
    calculararea(): number {
        let resultado: number = 0;
        resultado = this.alturaRectangulo * this.baseRectangulo;
        this.printResult(resultado);
        return resultado;
    }

    static calcularPerimetro(baseRectangulo: number,  alturaRectangulo: number): number {
        let resultado: number = 0;
        resultado = (2 * alturaRectangulo) + (2 * baseRectangulo);
        //printResult(resultado);
        return resultado;
    }

    printResult(resultado : number) : void{
        console.log('El resultado es: ' + resultado);
    }
}

let variable : number = 0;
// creando instancias de clases, se crea un nuevo objeto instanciando  una clase
let rentangulo : Rectangulo = new Rectangulo(123, 123,'blue');
let rentangulo2 : Rectangulo = new Rectangulo(90, 78, 'cyan');

rentangulo.calculararea();
rentangulo2.calculararea();

// metodos estaticos
class Circulo{
    static numeroCirculos : number = 0;

    constructor(private radio : number) {
        Circulo.numeroCirculos++;
    }

    CalcularArea() : number{
        return Math.PI * this.radio * this.radio;
    }
}

// un metodo estatico son operaciones que no es necesario almacenar un dato o un valor
console.log(Math.pow(2,2));

const circulo1 : Circulo = new Circulo(20);
const circulo2 : Circulo = new Circulo(20);
console.log('N° de circulos: ' + Circulo.numeroCirculos);