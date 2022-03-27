// crea nuevos tipos de datos
var Rectangulo = /** @class */ (function () {
    // sirve para pasar los parametros y asignarlos dentro del codigo.
    function Rectangulo(baseRectangulo, alturaRectangulo, color) {
        this.baseRectangulo = baseRectangulo;
        this.alturaRectangulo = alturaRectangulo;
    }
    // declarar metodos en una clase - una funcion similar a js
    // este es un ejemplo de metodo en typescript para una clase :)
    Rectangulo.prototype.calculararea = function () {
        var resultado = 0;
        resultado = this.alturaRectangulo * this.baseRectangulo;
        this.printResult(resultado);
        return resultado;
    };
    Rectangulo.calcularPerimetro = function (baseRectangulo, alturaRectangulo) {
        var resultado = 0;
        resultado = (2 * alturaRectangulo) + (2 * baseRectangulo);
        //printResult(resultado);
        return resultado;
    };
    Rectangulo.prototype.printResult = function (resultado) {
        console.log('El resultado es: ' + resultado);
    };
    return Rectangulo;
}());
var variable = 0;
// creando instancias de clases, se crea un nuevo objeto instanciando  una clase
var rentangulo = new Rectangulo(123, 123, 'blue');
var rentangulo2 = new Rectangulo(90, 78, 'cyan');
rentangulo.calculararea();
rentangulo2.calculararea();
// metodos estaticos
var Circulo = /** @class */ (function () {
    function Circulo(radio) {
        this.radio = radio;
        Circulo.numeroCirculos++;
    }
    Circulo.prototype.CalcularArea = function () {
        return Math.PI * this.radio * this.radio;
    };
    Circulo.numeroCirculos = 0;
    return Circulo;
}());
// un metodo estatico son operaciones que no es necesario almacenar un dato o un valor
console.log(Math.pow(2, 2));
var circulo1 = new Circulo(20);
var circulo2 = new Circulo(20);
console.log('N° de circulos: ' + Circulo.numeroCirculos);
