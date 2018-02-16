// window.onload = function(){
//     var list = document.getElementsByClassName('list')[0];
//     var prev = document.getElementById('prev');
//     var next = document.getElementById('next');
//     var container = document.getElementsByClassName('container')[0];
//     var button = container.getElementsByClassName('button')[0];
//     var span = button.getElementsByTagName('span');
//     var index = 0;
//     var timer;
//     list.style.left = -540 + 'px';
//     function animation(offest){
//         var _left = parseInt(list.style.left) + offest;
//         if(_left < -2700){
//             list.style.left = 0 + 'px';
//         }else if(_left > 0){
//             list.style.left = -2700 + 'px';
//         }else{
//             list.style.left = _left + 'px';
//         }
//     }
//     prev.onclick = function(){
//         index--;
//         if(index < 0){
//             index = 5;
//         }
//         doe();
//         animation(540);
//     }
//     next.onclick = function(){
//         index++;
//         if(index > 5){
//             index = 0;
//         }
//         doe();
//         animation(-540);
//     }
//     function play(){
//         timer = setInterval(function(){
//             next.onclick();
//         },1500);
//     }
//     play();
//     function stop(){
//         clearInterval(timer);
//     }
//     container.onmouseover = stop;
//     container.onmouseout = play;
//     function doe(){
//         for(var i=0; i<span.length; i++){
//             if(span[i].className == 'doe'){
//                 span[i].className = '';
//             }
//         }
//         span[index].className = 'doe';
//     }
//     function clickDoe(){
//         for(var i=0; i<span.length; i++){
//             (function(i){
//                 span[i].onclick = function(){
//                     switch(i){
//                         case 0:
//                         index=0;
//                         doe();
//                         list.style.left = 0 + 'px';
//                         break;
//                         case 1:
//                         index = 1;
//                         doe();
//                         list.style.left = -540 + 'px';
//                         break;
//                         case 2:
//                         index = 2;
//                         doe();
//                         list.style.left = -1080 + 'px';
//                         break;
//                         case 3:
//                         index = 3;
//                         doe();
//                         list.style.left = -1620 + 'px';
//                         break;
//                         case 4:
//                         index = 4;
//                         doe();
//                         list.style.left = -2160 + 'px';
//                         break;
//                         case 5:
//                         index = 5;
//                         doe();
//                         list.style.left = -2700 + 'px';
//                         break;
//                         default:
//                         alert('have a error!');
//                     }
//                 }
//             })(i);
//         }
//     }
//     clickDoe();
// }
window.onload = function() {
    var container = document.getElementsByClassName('container')[0];
    var _ul = document.getElementsByTagName('ul')[0];
    var prev = container.getElementsByClassName('choose1')[0];
    var next = container.getElementsByClassName('choose2')[0];
    var _span = document.getElementsByTagName('span');
    var count = 0;
    _ul.style.marginLeft = 0 + '%';
    function offset(offest) {
        var margin_left = parseInt(_ul.style.marginLeft) + offest;
        if(margin_left > 0){
            margin_left = -400;
            _ul.style.marginLeft = margin_left +'%';
        }else if(margin_left < -400){
            margin_left = 0;
            _ul.style.marginLeft = margin_left +'%';
        }else{
            _ul.style.marginLeft = margin_left +'%';
        }
    }
    prev.onclick = function() {
        count--;
        if(count < 0){
            count = 4;
            changeSpan(count);
        }else {
            changeSpan(count);
        }
        
        offset(100);
    }
    next.onclick = function() {
        count++;
        if(count > 4){
            count = 0;
            changeSpan(count);
        }else {
            changeSpan(count);
        }
        offset(-100);
    }
    function run(){
        timer = setInterval(function(){
            next.onclick();
        },1500);
    }
    run();
    function stop(){
        container.onmouseover = function() {
            clearInterval(timer);
        }
        container.onmouseout = function() {
            run();
        }
    }
    stop();
    function changeSpan(doe) {
        for(var i=0; i<_span.length; i++){
           if(_span[i].className = 'doe'){
               _span[i].className = '';
           }
        }
        _span[doe].className = 'doe';
    }
    function changDoe(){
        for(var j=0; j<_span.length; j++){
            (function(j){
                _span[j].onclick = function() {
                    var among =  j*(-100)-parseInt(_ul.style.marginLeft);
                    offset(among);
                    changeSpan(j);
                }
            })(j)
        }
    }
    changDoe();
}
