obj.grid = function(x, y, squareSize, hasBorder, borderColor, appendTo, canvasId) {
    this.x = x;
    this.y = y;
    this.squareSize = squareSize;
    this.borderSize = hasBorder ? 1 : 0;
 
    var objCanvas = new obj.canvas(appendTo, canvasId),
        self = this,
        canvasWidth     = x * squareSize + this.borderSize,
        canvasHeight    = y * squareSize + this.borderSize;
    console.log(canvasWidth);
    objCanvas.getCanvas().setAttribute('width', canvasWidth);
    objCanvas.getCanvas().setAttribute('height', canvasHeight);

    var context = objCanvas.getContext2d();    
    
    this.fillSquare = function(x, y, fillStyle) {
        context.fillStyle = fillStyle;                  
        if (x <= this.x && y <= this.y && x >=0 && y >= 0)
        context.fillRect(x * this.squareSize + this.borderSize, y * this.squareSize + this.borderSize, this.squareSize - this.borderSize, this.squareSize - this.borderSize);

    }

    this.destroy = function() {
        objCanvas.destroy();
    }
 }

obj.grid.prototype = new obj.EventEmitter();