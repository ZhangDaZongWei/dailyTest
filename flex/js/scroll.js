window.onload = function(){
    var list = document.getElementsByClassName('list')[0];
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var container = document.getElementsByClassName('container')[0];
    var button = container.getElementsByClassName('button')[0];
    var span = button.getElementsByTagName('span');
    var index = 0;
    var timer;
    list.style.left = -540 + 'px';
    function animation(offest){
        var _left = parseInt(list.style.left) + offest;
        if(_left < -2700){
            list.style.left = 0 + 'px';
        }else if(_left > 0){
            list.style.left = -2700 + 'px';
        }else{
            list.style.left = _left + 'px';
        }
    }
    prev.onclick = function(){
        index--;
        if(index < 0){
            index = 5;
        }
        doe();
        animation(540);
    }
    next.onclick = function(){
        index++;
        if(index > 5){
            index = 0;
        }
        doe();
        animation(-540);
    }
    function play(){
        timer = setInterval(function(){
            next.onclick();
        },1500);
    }
    play();
    function stop(){
        clearInterval(timer);
    }
    container.onmouseover = stop;
    container.onmouseout = play;
    function doe(){
        for(var i=0; i<span.length; i++){
            if(span[i].className == 'doe'){
                span[i].className = '';
            }
        }
        span[index].className = 'doe';
    }
    function clickDoe(){
        for(var i=0; i<span.length; i++){
            (function(i){
                span[i].onclick = function(){
                    switch(i){
                        case 0:
                        index=0;
                        doe();
                        list.style.left = 0 + 'px';
                        break;
                        case 1:
                        index = 1;
                        doe();
                        list.style.left = -540 + 'px';
                        break;
                        case 2:
                        index = 2;
                        doe();
                        list.style.left = -1080 + 'px';
                        break;
                        case 3:
                        index = 3;
                        doe();
                        list.style.left = -1620 + 'px';
                        break;
                        case 4:
                        index = 4;
                        doe();
                        list.style.left = -2160 + 'px';
                        break;
                        case 5:
                        index = 5;
                        doe();
                        list.style.left = -2700 + 'px';
                        break;
                        default:
                        alert('have a error!');
                    }
                }
            })(i);
        }
    }
    clickDoe();
}
