window.onload = function(){
    // 轮播
    var container_fuild4 = document.getElementsByClassName('container-fuild4')[0];
    var img = container_fuild4.getElementsByClassName("lunbo")[0];
    var images = ["images/lunbo/1.jpg","images/lunbo/2.jpg","images/lunbo/3.jpg","images/lunbo/4.jpg","images/lunbo/5.jpg"];
    var count = 0;
    function change(){
        img.src = images[count];
    }
    setInterval(function(){
        if(count <= 4){
            change();
            count++;
        }else{
            count = 0;
        }
    },2000);
    // 幻灯片
    var list = document.getElementsByClassName('list')[0];
    var list_content = document.getElementsByClassName('list-content')[0];
    var li_item = list.getElementsByTagName('li');
    // for(var i=0; i<li_item.length; i++) {
        li_item[0].onmouseover = function () {
            list_content.style.display = 'block';
            li_item[0].style.backgroundColor = 'white';
        }
        li_item[0].onmouseout = function () {
            list_content.onmouseover = function () {
                list_content.style.display = 'block';
                li_item[0].style.backgroundColor = 'white';
            }
            list_content.onmouseout = function () {
                list_content.style.display = 'none';
                li_item[0].style.backgroundColor = 'rgb(226, 226, 227)';
            }
        }
    }
// }