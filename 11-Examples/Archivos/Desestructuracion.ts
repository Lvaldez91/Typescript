
//Desestructuracion de objetos y arreglos 
(() =>{
    const avenger = {
        nombre: 'Luz Valdez'
        , clave: '00107724'
        , poder: 'ISC'
    };

    console.log(avenger.nombre);

    // se obtienen las propiedades de avenger
    const {nombre, clave, poder} = avenger;
    console.log(nombre);

    // extraer
    const extraer = ({nombre, poder} : any) => {
        console.log(nombre);
        console.log(poder);
    }

    extraer(avenger);

    // 

    const avengers : string [] = ['Lucero', 'Juan', 'Leonardo']; 

    console.log('arreglo 1' + avengers[1]);

    const [Linda, Guapo, Cabezon] = avengers; 
    console.log(Linda + ' ' + Guapo);

    
    const extraerArr = ([]:string[]) => {
        console.log(avengers[0]);
        console.log(avengers[1]);
    }
    extraerArr(avengers);
})(); 
 