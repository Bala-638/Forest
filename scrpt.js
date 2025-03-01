let defaultNum = 0;
let slide = document.querySelector(".slides")
let dots = document.querySelectorAll(".dot")
function changeSlide(num){
    defaultNum = num;
    slide.style.transform = `translateX(-${num * 33.3}%)`;

    dots.forEach(dot =>
        dot.classList.remove('active')
    );
    dots[num].classList.add('active')


}
function autoChange(){
    defaultNum = (defaultNum + 1) % 3;
    changeSlide(defaultNum)
}

// setInterval(autoChange,2000)




const changeTourPage = document.querySelector('.tourSlides')
const line= document.querySelectorAll(".placeName")

function change(num){

    changeTourPage.style.transform = `translateX(-${num * 33.3}%)`; 
    

    line.forEach(event => event.classList.remove('active'))
    line[num].classList.add('active')

}


// ===========Responsive======

// const head = document.querySelector('.head')
// function changeSize() {
//     head.style.height    = "200px"
// }