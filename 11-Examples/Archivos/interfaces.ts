
//Interfaces de TypeScript
(() => {

    interface Interfacexmen {
        nombre : 'Lucero';
        edad : 28;
    }

    // primer prueba
    const enviarMision_1 = (xmen:any) => {
        console.log(`Enviando a ${xmen.nombre} a la mision.`);    
    }

    const enviarMision_ = (xmen:Interfacexmen) => {
        console.log(`Enviando a ${xmen.nombre} a la mision.`);    
    }

    // algo similar pero con declaracion nombre:string
    const enviarMision_2 = (xmen: {nombre:string}) => {
        console.log(`Enviando a ${xmen.nombre} a la mision.`);    
    }
    
    const enviarMision = (xmen:Interfacexmen) => {
        console.log(`Enviando a ${xmen.nombre} a la mision.`);    
    }

    const wolverine : Interfacexmen = {
        nombre : 'Lucero'
        , edad : 28
    }

    enviarMision(wolverine); 
    enviarMision_(wolverine);
    
})();