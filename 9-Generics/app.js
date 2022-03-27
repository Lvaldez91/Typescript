"use strict";
//
var Pila = /** @class */ (function () {
    function Pila(_tamanio) {
        this.tamanio = 150;
        this.indexAct = 0;
        this.numElements = 0;
        if (_tamanio) {
            if (_tamanio > 0) {
                this.arrays = new Array(_tamanio);
            }
            else {
                throw Error('Not data in Array');
            }
        }
        else {
            this.arrays = new Array(this.tamanio);
        }
    }
    Pila.prototype.apilar = function (element) {
        if (this.numElements === this.arrays.length) {
            throw Error('Array is full.');
        }
        else {
            this.arrays[this.indexAct] = element;
            this.indexAct++;
            this.numElements++;
        }
    };
    Pila.prototype.desapilar = function () {
        if (this.numElements === 0) {
            throw Error('Array is empty.');
        }
        else {
            this.indexAct--;
            var elements = this.arrays[this.indexAct];
            this.numElements--;
            return elements;
        }
    };
    return Pila;
}());
var pila = new Pila();
var pila2 = new Pila(20);
// see size Array
console.log(pila.arrays.length);
console.log(pila2.arrays.length);
pila.apilar(25);
pila.apilar(11);
pila.apilar(87);
var element = pila.desapilar();
console.log(element);
element = pila.desapilar();
console.log(element);
element = pila.desapilar();
console.log(element);
// puede recibir cualquier tipo de dato
var ClassGeneric = /** @class */ (function () {
    function ClassGeneric(_dato) {
        this.dato = _dato;
    }
    // se pueden declarar todos lo metodos de cualquier tipo
    ClassGeneric.prototype.DoSomething = function (parameter) {
        var dato = parameter;
        return dato;
    };
    return ClassGeneric;
}());
var generic = new ClassGeneric(123);
var generic2 = new ClassGeneric('No es necesario memorizar todo');
