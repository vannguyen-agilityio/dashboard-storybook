function Sokoban(patterns) {
    this.mapIndex       = 0;
    
    var map            = maps[this.mapIndex],    
        w               = map[0].length,       
        h               = map.length,
        grid            = new obj.grid(w, h, 38),
        self            = this;
        console.log(self);
    var drawMap = function() {
        var i, j;

        for (i=0; i<map.length; i++) {
            for (j=0; j<map[i].length; j++) {
                grid.fillSquare(j, i, patterns[map[i][j]]);
            }
        }
    }
     this.playMap = function(mapIndex) {
        this.mapIndex = mapIndex;        
        grid.destroy();   
        map            = maps[this.mapIndex];    
        w               = map[0].length,
        h               = map.length,
        grid            = new obj.grid(w, h, 38);        
        this.play();
    }
    
    this.play = function() {
        drawMap();
        this.emit('stageStarted');
    }
    
    this.restartStage = function() {
        map = maps[this.mapIndex];
        drawMap();
    }
}
Sokoban.prototype = new obj.EventEmitter();