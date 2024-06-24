let  listImg=document.querySelector('.slide-show .list-img')
let  item =document.querySelectorAll('.slide-show .list-img . item')
let dots =document.querySelectorAll('.slide-show .dots li')
let prev= document.getElementById('prev')
let next= document.getElementById('next')

let active=0
let lengthitem=item.length-1;
next.onclick=function(){
   if( active +1 >lengthitem){
     active=0;
   }else{
    active=active+1;
   }
    reloadSlide();


}
function reloadSlide(){
    let checkLeft=item[active] .offsetLeft;
    list-style.left = - checkLeft+'px';
}

