function showElementAnimation() {

  var element = document.getElementsByClassName('js-animation');
  if(!element) return;
  
  var showTiming = window.innerHeight > 800 ? 200 : 40;
  var Y = window.pageYOffset;
  var H = window.innerHeight;

  for(var i=0;i<element.length;i++) { var elemClientRect = element[i].getBoundingClientRect(); var elemY = Y + elemClientRect.top; if(Y + H - showTiming > elemY) {
      element[i].classList.add('is-show');
    } else if(Y + H < elemY) {
    }
  }
}

showElementAnimation();
window.addEventListener('scroll', showElementAnimation);