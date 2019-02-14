function smoothScroll(target,duration){
    var target=document.querySelector(target);

    var targetposition=target.getBoundingClientRect().top;
    var startPosition=window.pageYOffset;
    var distance =targetposition-startPosition;

    var startTime=null;

    function animation(currentTime){


        if(startTime===null){
            startTime=currentTime;
        }

            var timeElaspsed=currentTime-startTime;
            var run =ease(timeElaspsed,startPosition,distance,duration);
            window.scrollTo(0,run);
            if(timeElaspsed<duration){
                requestAnimationFrame(animation);
            }

    }
    function ease (t, b, c, d) {
	   t /= d/2;
	    if (t < 1) return c/2*t*t*t + b;
	     t -= 2;
	    return c/2*(t*t*t + 2) + b;
     };

    requestAnimationFrame(animation);
}
var section1=document.querySelector('.section1');
section1.addEventListener('click',function(){

    smoothScroll('.section2',5000);
})
