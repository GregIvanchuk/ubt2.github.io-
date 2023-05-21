import styles from './MainSlider.module.css';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import FormFeedback from '../FormFeedback';
function MainSlider() {
      // ---------------------------------------------
      const [isOpen,setIsOpen] = useState(false);
      const openForm = () =>{
        setIsOpen(!isOpen);
      }
      const slides= [
        {src:"/images/slide1.jpg"  ,title:"ДИЗАЙН, ЩО ВІДОБРАЖАЄ ОСОБИСТІСТЬ" },
        {src:"/images/slide2.jpg"  ,title:"ІНДИВІДУАЛЬНИЙ ДИЗАЙН, ЯКИЙ ПРИВЕРТАЄ ПОГЛЯДИ" },
        {src:"/images/slide3.jpg"  ,title:"ЯКІСНИЙ РЕМОНТ З ГАРАНТІЄЮ" },
      ];
        const [currentIndex, setcurrentIndex] = useState(0);
        useEffect(() => {
          const intervalId = setInterval(() => {
            goToNext();
          }, 3000);
          return () => clearInterval(intervalId);
      }, [currentIndex]);
        const goToPrevios = () => {
          const isFirstSlide = currentIndex === 0;
          const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
          setcurrentIndex(newIndex);
        };
        const goToNext = () => {
          const isLastSlide = currentIndex === slides.length - 1;
          const newIndex = isLastSlide ? 0 : currentIndex + 1;
          setcurrentIndex(newIndex);  
          // Додатковий умовний оператор для переходу на перший слайд
          if (newIndex === 0) {
            setcurrentIndex(newIndex);
          }
        };
        const goToSlide = (slideIndex) => {
         setcurrentIndex(slideIndex);
       };
  return (
    <>

            <div  className={styles.sliderStyles}>
                    <div  className={styles.slideStyles} >
                          <img width={3000}  height={1000}  src={slides[currentIndex].src}/> 
                          <div  className={styles.innerSl} >
                           <h1>{slides[currentIndex].title}</h1>
                           <button onClick={() => openForm()}>Передзвоніть мені</button>
                           </div>
                        <div className={styles.leftArrowStyles} onClick={goToPrevios}>
                          <img height={35} width={35} src="/images/rarrow.png"  alt="" />
                          </div>
                        <div className={styles.rightArrowStyles} onClick={goToNext}> 
                        <img height={35} width={35} src="/images/larrow.png" alt="" />
                          </div>
                    </div>
                    <div  className={styles.dotsContainer}>
              {slides.map((item,slideIndex)=><div onClick={() => goToSlide(slideIndex)} className={styles.dots}  key={slideIndex}>.</div>)}
                    </div>
                </div>
               {isOpen ? <FormFeedback openForm={openForm} /> : ""} 
    </>
  );
}

export default MainSlider;
