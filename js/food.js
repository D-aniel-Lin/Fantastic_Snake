/**
 * Created by chelsea_lin on 2016/4/27.
 */
var foodObj = function(){
    this.x = new Array(15);
    this.y = new Array(15);
    this.food = '';
};
foodObj.prototype.init = function(){
    for(var i=0;i<15;i++){
        this.x[i]= i;
        this.y[i]= i;
    }
};
foodObj.prototype.born = function(){
    var minX = 10000,minY = 10000,maxX = 0,maxY = 0;
    for(var i=0;i<snake.aliveNum;i++){
        if(snake.x[i]>=maxX && snake.y[i]>=maxY){
            maxX = snake.x[i];
            maxY = snake.y[i]
        }
        if(snake.x[i]<=minX && snake.y[i]<=minY){
            minX = snake.x[i];
            minY = snake.y[i]
        }
    }
    var areaX = (14-maxX)>minX?(14-maxX):minX;
    var areaY = (14-maxY)>minY?(14-maxY):minY;
    if(areaX>areaY){
        if((14-maxX)>minX){
            this.x = Math.floor(maxX +1 + Math.random() * areaX)
        }else{
            this.x = Math.floor( Math.random() * areaX)
        }
        this.y = Math.floor(Math.random() * 14);
    }else{
        if((14-maxY)>minY){
            this.y = Math.floor(maxY + 1 + Math.random() * areaY)
        }else{
            this.y = Math.floor( Math.random() * areaY)
        }
        this.x = Math.floor(Math.random() * 14);
    }
    this.food = $('<div></div>');
    $('.snakeList').append(this.food);
    this.food.addClass('food').css({'top':this.y+'rem','left':this.x+'rem'});
};

