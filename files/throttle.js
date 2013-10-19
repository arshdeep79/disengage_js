function throttle(el,event,func){
  var t = 0;
  el[event] = function(){
    clearTimeout(t);
    t = setTimeout(function(){
      func(el);
    },100);
  }
}