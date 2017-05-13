//获取元素节点
var modal=document.querySelector('#modal');
var btnModal=document.querySelector('.btn-modal');
var modalCt=document.querySelector('.btn-modal .modal-ct');

//点击button时候btn-modal对话框出现
modal.addEventListener('click',function(e){
  e.stopPropagation();
  showModal(btnModal);
})
//点击btn-modal中的关闭X或取消时对话框隐藏
modalCt.addEventListener('click',function(e){
  e.stopPropagation();
  if(hasClass(e.target,'close')||hasClass(e.target,'btn-cancel')){
    hiddenModal(btnModal);
  }
})
//点击对话框以外其他位置的时候对话框隐藏
document.body.addEventListener('click',function(){
  hiddenModal(btnModal);
})

function showModal(modal){
  modal.style.display = 'block';
}
function hiddenModal(modal){
  modal.style.display = 'none';
}
//传入两个参数：一个元素对象 一个内部class
function hasClass(ele,cls){
  return !!ele.className.match(new RegExp('\\b'+cls+'\\b'))
}