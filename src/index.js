
/*
*
* Botón navegación menú
*
*/
const navButton =  document.getElementById('nav-button');
const buttonBars = [
    document.getElementById('bar-one'),
    document.getElementById('bar-two'),
    document.getElementById('bar-three'),
]
const navPanel = document.getElementById('nav-panel');


function navigationMenuHandler(){

    buttonBars.forEach((bar)=>{
        bar.classList.toggle('isMenuActive');
    })

    navPanel.classList.toggle('isMenuActive');
    
        
}


navButton.addEventListener('click', navigationMenuHandler);



/*
*
* Text slideshow
*
*/

const sections = [
    document.getElementById('slideshow-1'),
    document.getElementById('slideshow-2'),
    document.getElementById('slideshow-3')
]

//Initial slideshow text display
showSlide(0,0);
showSlide(1,0);
showSlide(2,0);


function showSlide(sectionIndx, slideIndx){

    var section = sections[sectionIndx];
    var slides = section.querySelectorAll('.text-slideshow__text');
    var dots = section.querySelectorAll('.dot');

    //Activación y Desactivación de dots
    for(let d = 0; d < dots.length; d++){
        if(d===slideIndx){
            if(!dots[d].classList.contains('active-dot')){
                dots[d].classList.toggle('active-dot');
            }
            
        }
        else if(dots[d].classList.contains('active-dot')){
            dots[d].classList.toggle('active-dot');
        }
    }
    //Activación y desactivación de texto
    for(let t = 0; t < slides.length; t++){

        if(t===slideIndx ){
            if(!slides[t].classList.contains('active-text')){
                slides[t].classList.toggle('active-text');
            }           
        }
        else if(slides[t].classList.contains('active-text')){
            slides[t].classList.toggle('active-text');
        }
    }
}