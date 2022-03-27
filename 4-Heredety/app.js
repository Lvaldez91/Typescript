var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// properties of the multimedia - clase padre
var MultimediaFile = /** @class */ (function () {
    //dateCreation: string = '';
    //dateModification: string ='';
    //name:string = '';
    //typeElement: string = '';
    function MultimediaFile(dateCreation, dateModification, name, typeElement) {
        this.dateCreation = dateCreation;
        this.dateModification = dateModification;
        this.name = name;
        this.typeElement = typeElement;
    }
    // method
    MultimediaFile.prototype.deployInformation = function () {
        var information = this.name + ' ' + this.typeElement + ' ' + this.dateModification + ' ' + this.dateCreation;
        console.log(information);
    };
    return MultimediaFile;
}());
var DynamicFile = /** @class */ (function (_super) {
    __extends(DynamicFile, _super);
    // se utiliza super para invocar el constructor principal de multimedia file
    function DynamicFile(dateCreation, dateModification, name, typeElement, duration) {
        var _this = _super.call(this, dateCreation, dateModification, name, typeElement) || this;
        _this.dateCreation = dateCreation;
        _this.dateModification = dateModification;
        _this.name = name;
        _this.typeElement = typeElement;
        _this.duration = duration;
        return _this;
    }
    DynamicFile.prototype.stoping = function () {
    };
    DynamicFile.prototype.paused = function () {
    };
    DynamicFile.prototype.playing = function () {
    };
    return DynamicFile;
}(MultimediaFile));
var StaticFile = /** @class */ (function (_super) {
    __extends(StaticFile, _super);
    // se utiliza super para invocar el constructor principal de multimedia file
    function StaticFile(dateCreation, dateModification, name, typeElement) {
        var _this = _super.call(this, dateCreation, dateModification, name, typeElement) || this;
        _this.dateCreation = dateCreation;
        _this.dateModification = dateModification;
        _this.name = name;
        _this.typeElement = typeElement;
        return _this;
    }
    StaticFile.prototype.Edit = function () {
        console.log('Editing...');
    };
    return StaticFile;
}(MultimediaFile));
var mFile = new MultimediaFile('2020-09-15', '2021-09-15', 'Luz', 'File Text');
mFile.name = 'prueba.txt';
mFile.dateCreation = '2021-07-19';
mFile.dateModification = '2021-09-15';
mFile.typeElement = 'Text File';
mFile.deployInformation();
var dFile = new DynamicFile('2020-09-15', '2021-09-15', 'Luz', 'File Text', '122');
var sFile = new StaticFile('2020-09-15', '2021-09-15', 'Luz', 'File Text');
sFile.Edit();
