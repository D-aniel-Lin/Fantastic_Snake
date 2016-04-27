/**
 * Created by chelsea_lin on 2016/4/27.
 */
var snakeObj = function () {
    this.snakePart = [];
    this.x = [];
    this.y = [];
    this.direction = [];
    this.aliveNum = 0;
};

snakeObj.prototype.num = 50;

snakeObj.prototype.init = function(){
    for(var i=1;i<this.num;i++){
        this.snakePart[i] = '';
        this.x[i] = '';
        this.y[i] = '';
    }
};

snakeObj.prototype.born=function(i){
    var j = this.aliveNum ;
    this.aliveNum++;
    if(i == 0){
        this.x[i] = 6;
        this.y[i] = 6;
    }else{
        this.direction[j] = this.direction[j-1];
        switch(this.direction[j-1]){
            case 0:
                this.x[j] = this.x[j-1];
                this.y[j] = this.y[j-1] + 1;
                break;
            case 1:
                this.x[j] = this.x[j-1] - 1;
                this.y[j] = this.y[j-1];
                break;
            case 2:
                this.x[j] = this.x[j-1];
                this.y[j] = this.y[j-1] - 1;
                break;
            case 3:
                this.x[j] = this.x[j-1] + 1;
                this.y[j] = this.y[j-1];
                break;
        }
    }
    this.snakePart[j] = $('<div></div>');
   /* console.log(this.snakePart[j]);*/
    this.snakePart[j].addClass('snake').css({'top':this.y[j]+'rem','left':this.x[j]+'rem'});
    $('.snakeList').append(this.snakePart[j]);
};

snakeObj.prototype.move = function(direction){
    if(this.aliveNum>1){
        for(var i=this.aliveNum -1;i>=1;i--){
            this.direction[i] = this.direction[i-1];
        }
    }
    this.direction[0] = direction;
    for( i=0;i<this.aliveNum;i++){
        switch(this.direction[i]){
            case 0:
                this.y[i] = this.y[i] - 1;
                break;
            case 1:
                this.x[i] = this.x[i] + 1;
                break;
            case 2:
                this.y[i] = this.y[i] + 1;
                break;
            case 3:
                this.x[i] = this.x[i] - 1;
                break;
        }
        this.snakePart[i].css({'top':this.y[i]+'rem','left':this.x[i]+'rem'})
    }

};