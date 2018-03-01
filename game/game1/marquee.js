// 跑马灯
function marquee(element) {
    var _element = element;
    function change(){
        var _text = _element.innerHTML;
        var _first = _text[0];
        var sub_text = _text.slice(1,_text.length);
        _element.innerHTML = sub_text + _first;
    }
    setInterval(change,1000);
}
