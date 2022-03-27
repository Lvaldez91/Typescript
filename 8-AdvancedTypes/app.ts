class errorStatus{
    type?: 'Error';
    code?: number;
}

class successStatus{
    type?: 'Success';
    code?: number;
    response?: string;
}

// uniones
type Status = errorStatus | successStatus;
function get(status:Status){
    switch(status.type){
        case 'Error':
            console.log('Error in application LVD-System.');
        break;
        case 'Success':
            console.log(status.response);
        break;
    }
    console.log(status.code);
}

interface ErrorHadling{
    success: boolean;
    error?: string;
}

interface GameData{
    title: string;
}

interface ArtistData{
    name: string;
}

// intersección
type GamesResponse = GameData & ErrorHadling;
type ArtistResponse = ArtistData & ErrorHadling;

const game: GamesResponse = {
    title: 'WZ',
    success: true
}

const artist: ArtistResponse = {
    name: 'Luz Valdez',
    success: false,
    error: '404'
}

// la interseccion puede trabajar con varias intersecciones pero se queda al final con el tipo de dato que compartan ambas intersecciones.
type superString = string | number;
type superNumber = number | boolean;
type superType = superString & superNumber;
/* Como funcionan los toit wards: identifica el tipo de dato que se esta trabajando o recibiendo*/

function add(a: superString, b: superNumber){
    // toit wards
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    } else {
        return a.toFixed() + b ;
    }
}

type NetworkData = GameData | ErrorHadling;

function dowloadData(data: NetworkData){
    if('tittle' in data){
        console.log(data);
    }
    if('tittle' in data){
        console.log(data);
    }
}

dowloadData(game);
dowloadData(artist);


class VideoPalyer{
    play(): void {
        console.log('Playing video...');
    }
}

class ImagePlayer{
    play(): void{
        console.log('Playing images...');
    }
    draw(): void{
        console.log('Drawing image...');
    }
}

// TypeGuard instanceof
type Player = VideoPalyer | ImagePlayer;

function usePlayer(player: Player){
    player.play();
    if(player instanceof ImagePlayer){
        player.draw();
    }
}
// const canvas  = document.getElementById('myCanvas')! as HTMLCanvasElement;
const canvas  = <HTMLCanvasElement> document.getElementById('myCanvas')!;
const c1 = canvas.getContext('2D');

const weather = {
    weather : 'clear sky'
    , city: 'Mexico City'
    , summary: 'The sky is clear'
};

// index property
type Weather = {
    [property: string]: string
};

const weather2: Weather = {
    weather : 'clear sky 2'
    , city: 'Mexico City 2'
    , summary: 'The sky is clear 2'
    , temp: '23'
};

// sobre carga de las funciones - OverLoads
function add2(s: string, y:string):string;
function add2(x: number, y: number): number;
// function add2(x: superString, y: superString): any {
//function add2(x: any, y: any): any {
function add2(x: superString, y: superString): any {
    if(typeof x=== 'string'|| typeof y === 'string'){
        return x.toString() + y.toString();
    } else {
        return x + y;
    }
}

console.log(add2(19,7));

// Optional Chaining - Es una técnica nos va permitir la evaluacion de las propiedades de un objeto o elemento
const button = document.getElementById('btn');
button?.addEventListener('click', () => {
    console.log('Click in button.');
});
