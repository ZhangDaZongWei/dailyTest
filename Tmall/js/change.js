window.onload = function () { 
    var list = document.getElementsByClassName('list')[0];
    var list_content = document.getElementsByClassName('list-content')[0];
    var li_item = list.getElementsByTagName('li');
    //li_item[0].style.backgroundColor = 'rgb(226, 226, 227)';
    li_item[0].onmouseover = function () { 
        list_content.style.display = 'block';
        li_item[0].style.backgroundColor = 'white';
     }
     li_item[0].onmouseout = function() {
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