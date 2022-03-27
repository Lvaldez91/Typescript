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
var Shape = /** @class */ (function () {
    function Shape(ctx, originX, originY) {
        this.ctx = ctx;
        this.originX = originX;
        this.originY = originY;
    }
    return Shape;
}());
// se heredan propiedades de shape a line --> se utiliza super para hacer uso de la herencia.
var Line = /** @class */ (function (_super) {
    __extends(Line, _super);
    function Line(ctx, originX, originY, x, y) {
        var _this = _super.call(this, ctx, originX, originY) || this;
        _this.x = x;
        _this.y = y;
        return _this;
    }
    Line.prototype.draw = function () {
        this.ctx.moveTo(this.originX, this.originY);
        this.ctx.lineTo(this.x, this.y);
        this.ctx.stroke();
    };
    return Line;
}(Shape));
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(ctx, originiX, originiY, radius) {
        var _this = _super.call(this, ctx, originiX, originiY) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.draw = function () {
        ctx.beginPath();
        ctx.arc(this.originX, this.originY, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
    };
    return Circle;
}(Shape));
var TextShape = /** @class */ (function (_super) {
    __extends(TextShape, _super);
    function TextShape(ctx, originiX, originiY, textShape) {
        var _this = _super.call(this, ctx, originiX, originiY) || this;
        _this.textShape = textShape;
        return _this;
    }
    TextShape.prototype.draw = function () {
        this.ctx.font = '30px Calibri';
        this.ctx.fillText(this.textShape, this.originX, this.originY);
    };
    return TextShape;
}(Shape));
var MathHelper = /** @class */ (function () {
    function MathHelper() {
    }
    MathHelper.generateRandom = function () {
        return Math.random() * 500;
    };
    return MathHelper;
}());
var v = document.getElementById("myCanvas");
var ctx = v.getContext("2d");
var btnLine = document.getElementById("drawLine");
var btnCircle = document.getElementById("drawCircle");
var btnTextShape = document.getElementById("drawTextShape");
btnLine === null || btnLine === void 0 ? void 0 : btnLine.addEventListener("click", function () {
    var line = new Line(ctx, MathHelper.generateRandom(), MathHelper.generateRandom(), MathHelper.generateRandom(), MathHelper.generateRandom());
    line.draw();
});
btnCircle === null || btnCircle === void 0 ? void 0 : btnCircle.addEventListener("click", function () {
    var circle = new Circle(ctx, MathHelper.generateRandom(), MathHelper.generateRandom(), MathHelper.generateRandom());
    circle.draw();
});
btnTextShape === null || btnTextShape === void 0 ? void 0 : btnTextShape.addEventListener("click", function () {
    var textShape = new TextShape(ctx, MathHelper.generateRandom(), MathHelper.generateRandom(), 'LVD');
    textShape.draw();
});
