var tabs=document.getElementsByClassName('tab')
for(var i=0;i<tabs.length;i++){
    tabs[i].addEventListener('click',function(e){
var tab=this.nextElementSibling;
var content=document.getElementById('content')
content.innerHTML=tab.innerHTML


    })}