
//Tipado del retorno de una funcion
(() => {

    // retorna un numero
    const sumar = (a: number, b:number) : number => {
        return a + b;
    }
    
    // es lo mismo que sumar
    const suma = (a: number, b:number) : number => a + b; 

    const obtenerSalario = () : Promise<string> => {
        return new Promise((resolve, reject) => {
            resolve('Correcto!!');
        });
    }

    obtenerSalario().then(a => console.log(a.toUpperCase() ))
    

})();