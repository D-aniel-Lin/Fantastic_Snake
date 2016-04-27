/**
 * Created by chelsea_lin on 2016/4/26.
 */
var docEl = document.documentElement;
var docLess = docEl.clientWidth>docEl.clientHeight?docEl.clientHeight:docEl.clientWidth;
var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function() {
        docEl.style.fontSize = Math.floor(20 * (docLess / 320)) + 'px';
    };
window.addEventListener(resizeEvt, recalc, false);
document.addEventListener('DOMContentLoaded', recalc, false);

var canvas = document.getElementById('canvas');
var snake = new snakeObj();
var food = new foodObj();
snake.init();
snake.born(0);
food.born();
var timer = '';
var timer_2 = '';

/* move the snakeObj */
function gameOver(){
    clearInterval(timer);
    clearInterval(timer_2);
    for(var i=0;i<=3;i++){
        $('.handler div').eq(i).unbind('click')
    }
    i=1;
    var alpha = 0.05;
    canvas.style.display = 'block';
    var timer_3 = setInterval(function(){
        canvas.style.opacity = alpha * i ;
        i++;
        if(i>20){
            clearInterval(timer_3);
        }
    },100)

}

timer_2 = setInterval(function(){
    if(Math.abs(snake.x[0] - food.x)<1 && Math.abs(snake.y[0] - food.y)<1 ){
        snake.born();
        $('.food').remove();
        food.born();
    }
    if(snake.x[0]<0 || snake.x[0]>14 || snake.y[0]<0 || snake.y[0]>14 ){
        gameOver()
    }
    for(var i=4;i<snake.aliveNum;i++){
        if(snake.x[i]==snake.x[0] && snake.y[i]==snake.y[0]){
            gameOver()
        }
    }
},50);

for(var i=0;i<=3;i++){
    $('.handler div').eq(i).on('click',function(){
        clearInterval(timer);
        a = parseInt($(this).attr("id"));
        snake.move(a);
        timer = setInterval('snake.move(a)',500);
    });
}

