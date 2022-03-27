class Shape {
    constructor(public ctx: CanvasRenderingContext2D, public originX: number, public originY: number){
    }
}

// se heredan propiedades de shape a line --> se utiliza super para hacer uso de la herencia.
class Line extends Shape{
    constructor(ctx: CanvasRenderingContext2D, originX: number, originY: number
        , public x:number, public y:number) {
        super(ctx, originX, originY);
    }

    draw():void {
        this.ctx.moveTo(this.originX,this.originY);
        this.ctx.lineTo(this.x,this.y);
        this.ctx.stroke();
    }
}

class Circle extends Shape {
    constructor(ctx: CanvasRenderingContext2D, originiX: number, originiY: number, public radius: number ){
        super(ctx, originiX, originiY);
    }

    draw():void {
        ctx.beginPath();
        ctx.arc(this.originX, this.originY
              , this.radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

class TextShape extends Shape {
    constructor(ctx: CanvasRenderingContext2D, originiX: number, originiY: number, public textShape: string){
        super(ctx, originiX, originiY);
    }

    draw():void{
        this.ctx.font = '30px Calibri';
        this.ctx.fillText(this.textShape, this.originX, this.originY);
    }
}

class MathHelper {
    static generateRandom():number {
        return Math.random() * 500;
    }
}

const v =<HTMLCanvasElement>document.getElementById("myCanvas");
var ctx = <CanvasRenderingContext2D> v.getContext("2d");
const btnLine = document.getElementById("drawLine");
const btnCircle = document.getElementById("drawCircle");
const btnTextShape = document.getElementById("drawTextShape");

btnLine?.addEventListener("click", () => {
    const line = new Line(ctx, MathHelper.generateRandom(),MathHelper.generateRandom()
    ,MathHelper.generateRandom(),MathHelper.generateRandom());
    line.draw();
});

btnCircle?.addEventListener("click", () => {
    const circle = new Circle(ctx, MathHelper.generateRandom(),MathHelper.generateRandom(),MathHelper.generateRandom());
    circle.draw();
});

btnTextShape?.addEventListener("click", () => {
    const textShape = new TextShape(ctx, MathHelper.generateRandom(),MathHelper.generateRandom(),'LVD');
    textShape.draw();
});