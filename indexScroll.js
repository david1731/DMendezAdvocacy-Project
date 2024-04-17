let animation = {
  revealDistance:150,
  initialOpacity:0,
  transitionDelay:0,
  transitionDuration:'2s',
  transitionProperty:'all',
  transitionTimingFunction:'ease'
}

let revealableContainers = document.querySelectorAll('.revealable');
const reveal = () =>{
  for(let i = 0; i < revealableContainers.length; i++){
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if(topOfRevealableContainer < windowHeight - animation.revealDistance){
      revealableContainers[i].classList.add('active');
    }else{
      revealableContainers[i].classList.remove('active');
    }
  }
}

const reduceAnimation = () =>{
  animation.revealDistance = 0;
  animation.transitionDuration = '0s';
  animation.transitionProperty = 'none';
  animation.transitionTimingFunction ='none';

  for(let i = 0; i < revealableContainers.length; i++){
    revealableContainers[i].style.revealDistance = animation.revealDistance;
    revealableContainers[i].style.transitionDuration = animation.transitionDuration;
    revealableContainers[i].style.transitionProperty = animation.transitionProperty;
    revealableContainers[i].style.transitionTimingFunction = animation.transitionTimingFunction;
  }
}
let reduceMotionBtn = document.getElementById('reduce-motion');
reduceMotionBtn.addEventListener('click', reduceAnimation);
window.addEventListener('scroll', reveal);

