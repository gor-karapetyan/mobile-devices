/*let slideOrder = ['ej1', 'ej2'];

function openNextSlide(){
    let currentVisible = document.querySelector('.hello.visible');
    if(currentVisible === null){
        console.log("No any visible slides");
        return;
    }
    let slide = currentVisible.dataset.slide;
    let index = slideOrder.indexOf(slide);
    if(slideOrder[index + 1] !== undefined){
        
        let nextSlide = document.querySelector(`[data-slide="${slideOrder[index + 1]}"]`);
        if(nextSlide !== null){
            currentVisible.classList.remove('visible');
            currentVisible.classList.add('layout1');
            
            if(window.innerWidth > 760) {
                nextSlide.classList.add('visible');
            }
            if (window.innerWidth <= 760) {
                // Then log this message to the console
                 document.querySelector('.vkc__Auth__pageBox').style.display = '.layout1';
                 document.querySelector('.ggggg').style.display = '.layout1';
                 document.querySelector('.vkc_001').style.display = 'block';
              }
            /*init();
            /*checkMediaQuery();
        }
    }
}*/



/*function checkMediaQuery() {
    // If the inner width of the window is greater then 768px
    if (window.innerWidth <= 760) {
      // Then log this message to the console
       document.querySelector('.vkc__Auth__pageBox').style.display = 'none';
       document.querySelector('.vkc_001').style.display = 'block';
    }
    if (window.innerWidth > 760) {
        // Then log this message to the console
       document.querySelector('.vkc__Auth__pageBox').style.display = 'block';
       document.querySelector('.vkc_001').style.display = 'none';
    }
  }
  // Add a listener for when the window resizes
  /*window.addEventListener('resize', checkMediaQuery);*/









/*document.addEventListener('DOMContentLoaded', init);*/


/*function init() {
    let query = window.matchMedia("(max-width: 801px)");
    if(query.matches > 801) {
        document.querySelector('.ddd').style.color = "red";
    }else{
        document.querySelector('.mmm').style.display = "#4bb34b";
    }
}*/

/*function myFunction(x) {
    if (x.matches) { // If media query matches
      document.body.style.backgroundColor = "red";
    } else {
     document.body.style.backgroundColor = "pink";
    }
  }
  
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  /*x.addEventListener(myFunction)*/

  
  
  
  
  
  
  /*function checkMediaQuery() {
    // If the inner width of the window is greater then 768px
    if (window.innerWidth < 760) {
      // Then log this message to the console
      document.querySelector('.ddd').style.color = "red";
      document.querySelector('.mmm').style.color = "#4bb34b";
    }
    if (window.innerWidth > 760) {
        // Then log this message to the console
        document.querySelector('.ddd').style.color = "blue";
        document.querySelector('.mmm').style.color = "orange";
      }
  }
  // Add a listener for when the window resizes
  window.addEventListener('resize', checkMediaQuery);*/