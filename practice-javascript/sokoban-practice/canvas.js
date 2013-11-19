obj.canvas = function(appendTo, canvasId, width, height) {

    if (!appendTo) appendTo = document.body;
    if (!canvasId) canvasId = 'canvas';
    
    var canvas = document.createElement('canvas');
    canvas.setAttribute('id', canvasId);
    
    canvas.width = width ;
    canvas.height = height;
    
    appendTo.appendChild(canvas);
    
    this.getCanvas = function() {
        return canvas;
    }
    
    this.getContext2d = function() {
        return canvas.getContext('2d');
    }
    
    this.destroy = function() {
        appendTo.removeChild(canvas);
    }
}