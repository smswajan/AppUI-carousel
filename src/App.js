import React, { useState, ReactDOM } from 'react';
import { Button } from 'react-bootstrap';
import "./App.css";
import { AppUI1, AppUI2, AppUI3 } from './images';
// import "./test"

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  let uiOne = "ui-one";
  let uiTwo = "ui-two";
  let uiThree = "ui-three"
  // const showOne = () => {
  //   uiOne = "ui-one";
  //   uiTwo = "ui-two";
  //   uiThree = "ui-three"
  // }
  // const showTwo = () => {
  //   uiTwo = "ui-one";
  //   uiThree = "ui-two";
  //   uiOne = "ui-three"
  // }
  // const showThree = () => {
  //   uiThree = "ui-one";
  //   uiOne = "ui-two";
  //   uiTwo = "ui-three"
  // }
  // if (currentSlide == 1) {
  //   uiOne = "ui-one";
  //   uiTwo = "ui-two";
  //   uiThree = "ui-three"
  // } else if (currentSlide == 2) {
  //   showTwo()
  // } else if (currentSlide == 3) {
  //   showThree()
  // }


  // const slideUIs = () => {
  //   if (currentSlide == 3) {
  //     setCurrentSlide(1)
  //   } else if (currentSlide < 3) {
  //     setCurrentSlide(currentSlide + 1);
  //   }
  //   setTimeout(slideUIs, 2000)
  // }
  // slideUIs();
  let slideIndex = 0;
  const showSlides = () => {
    var i;
    var slides = ReactDOM.findDOMNode().getElementsByClassName('app-ui');
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

  return (
    <>
      <div className="jumbotron bg-primary" >
        <h2 className="text-center text-white">App UI Carousel</h2>
      </div >
      <div className="container">
        <div className="row">
          <div className="col-md-7 py-4 offset-md-5 bg-light">
            <h2>Hello</h2>
            <div className="app-ui">
              <div className="app-ui">
                <img src={AppUI1} alt="" className="img-fluid" />
              </div>
              <div className="app-ui">
                <img src={AppUI2} alt="" className="img-fluid" />
              </div>
              <div className="app-ui">
                <img src={AppUI3} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
