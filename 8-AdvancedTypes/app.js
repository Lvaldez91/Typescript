"use strict";
var errorStatus = /** @class */ (function () {
    function errorStatus() {
    }
    return errorStatus;
}());
var successStatus = /** @class */ (function () {
    function successStatus() {
    }
    return successStatus;
}());
function get(status) {
    switch (status.type) {
        case 'Error':
            console.log('Error in application LVD-System.');
            break;
        case 'Success':
            console.log(status.response);
            break;
    }
    console.log(status.code);
}
var game = {
    title: 'WZ',
    success: true
};
var artist = {
    name: 'Luz Valdez',
    success: false,
    error: '404'
};
/* Como funcionan los toit wards: identifica el tipo de dato que se esta trabajando o recibiendo*/
function add(a, b) {
    // toit wards
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    else {
        return a.toFixed() + b;
    }
}
function dowloadData(data) {
    if ('tittle' in data) {
        console.log(data);
    }
    if ('tittle' in data) {
        console.log(data);
    }
}
dowloadData(game);
dowloadData(artist);
var VideoPalyer = /** @class */ (function () {
    function VideoPalyer() {
    }
    VideoPalyer.prototype.play = function () {
        console.log('Playing video...');
    };
    return VideoPalyer;
}());
var ImagePlayer = /** @class */ (function () {
    function ImagePlayer() {
    }
    ImagePlayer.prototype.play = function () {
        console.log('Playing images...');
    };
    ImagePlayer.prototype.draw = function () {
        console.log('Drawing image...');
    };
    return ImagePlayer;
}());
function usePlayer(player) {
    player.play();
    if (player instanceof ImagePlayer) {
        player.draw();
    }
}
// const canvas  = document.getElementById('myCanvas')! as HTMLCanvasElement;
var canvas = document.getElementById('myCanvas');
var c1 = canvas.getContext('2D');
var weather = {
    weather: 'clear sky',
    city: 'Mexico City',
    summary: 'The sky is clear'
};
var weather2 = {
    weather: 'clear sky 2',
    city: 'Mexico City 2',
    summary: 'The sky is clear 2',
    temp: '23'
};
// function add2(x: superString, y: superString): any {
//function add2(x: any, y: any): any {
function add2(x, y) {
    if (typeof x === 'string' || typeof y === 'string') {
        return x.toString() + y.toString();
    }
    else {
        return x + y;
    }
}
console.log(add2(19, 7));
// Optional Chaining - Es una técnica nos va permitir la evaluacion de las propiedades de un objeto o elemento
var button = document.getElementById('btn');
button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
    console.log('Click in button.');
});
