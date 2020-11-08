let slideIndex = 0;
const showSlides = () => {
    var i;
    var slides = document.getElementsByClassName("app-ui");
    console.log("slides", slides);
    // for(i = 0; i < slides.length; i++){
    //   slides[i].s
    // }
    slideIndex++;
    if (slideIndex > 3) { slideIndex = 1 };
    if (slideIndex == 1) {
        slides[0].className += 'ui-one';
        slides[1].className += 'ui-two';
        slides[2].className += 'ui-three';
        console.log("index", slideIndex);
    }
    if (slideIndex == 2) {
        slides[1].className += 'ui-one';
        slides[2].className += 'ui-two';
        slides[0].className += 'ui-three';
        console.log("index", slideIndex);

    }
    if (slideIndex == 3) {
        slides[2].className += 'ui-one';
        slides[0].className += 'ui-two';
        slides[1].className += 'ui-three';
        console.log("index", slideIndex);

    }
    setTimeout(showSlides, 2000)
}
showSlides()