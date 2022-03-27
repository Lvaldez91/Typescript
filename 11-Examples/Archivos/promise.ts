
//Promesas y su tipado en TypeScript
(() => {

    //const retirarDinero = ( montoRetirar: number) => { // esta es ptra forma de escribir promise
    const retirarDinero = ( montoRetirar: number) : Promise<number> => {
        let dinero = 7500; 
        
        return new Promise((resolve, reject) => {
            if(montoRetirar > dinero){
                reject('No hay suficientes fondos para realizar transacción.'); 
            } else {
                dinero -= montoRetirar;
                resolve(dinero);
            }
        });
    }

    retirarDinero(10000)
        .then(dinero => console.log(`Tiene saldo de ${dinero}`))
        .catch(error => console.warn(error));
})();