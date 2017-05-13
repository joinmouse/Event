//获取元素节点
var tabHeader = document.querySelector('.tab-header');
var tabLis = document.querySelectorAll('.tab-header>li');
var tabCt = document.querySelectorAll('.tab-container>li');

tabHeader.addEventListener('click',function(e){
  if(e.target.tagName.toLowerCase()==='li'){
    var clickNode=e.target; 
//移除tab-header中的active节点元素  
    for(var i=0;i<tabLis.length;i++){
      tabHeader.children[i].classList.remove('active');
    }
//根据tab-header节点点击位置添加active元素
    clickNode.classList.add('active');
  }
//利用数组的indexOf和call调用方法来判断被点击元素的位置
  var index = [].indexOf.call(tabLis,clickNode)
  console.log(index);

//移除tab-container中的active节点元素
  for(var i=0; i<tabCt.length;i++){
    tabCt[i].classList.remove('active');
  }
//根据tab-header节点点击位置添加active元素到对应的tab-container子节点中
  tabCt[index].classList.add('active');
})