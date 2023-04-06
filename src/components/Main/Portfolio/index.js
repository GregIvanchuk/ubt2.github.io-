import styles from './Portfolio.module.css';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
function Portfolio({parentData}) {
      // ---------------------------------------------
      const slides=[["/images/slide1.jpg","/images/slide2.jpg","/images/slide3.jpg","/images/slide3.jpg","/images/slide3.jpg",],
      ["/images/woman1.jpg","/images/woman2.jpg","/images/man.jpg",]]
        const [currentIndex, setcurrentIndex] = useState(0);
      //   useEffect(() => {
      //     const intervalId = setInterval(() => {
      //       goToNext();
      //     }, 3000);
      //     return () => clearInterval(intervalId);
      // }, [currentIndex]);
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
       console.log(parentData);
  return (
    <>     
            <div  className={styles.sliderStyles}>
            <h1>СПАЛЬНІ</h1>
                    <div  className={styles.slideStyles} >
                          <img width={1400} height={500}  src={slides[parentData][currentIndex]}/> 
            
                        <div className={styles.leftArrowStyles} onClick={goToPrevios}>
                          <img height={32} width={32} src="/images/rarrow.png"  alt="" />
                          </div>
                        <div className={styles.rightArrowStyles} onClick={goToNext}> 
                        <img height={32} width={32} src="/images/larrow.png" alt="" />
                          </div>
                    </div>
                    <div  className={styles.dotsContainer}>
              {slides[parentData].map((item,slideIndex)=><img src={item} width={200} height={100} onClick={() => goToSlide(slideIndex)} 
               className={`${styles.dots} ${currentIndex === slideIndex ? styles.activeDot : ''}`}  key={slideIndex}/>)}
                    </div>
                </div>
    </>
  );
}

export default Portfolio;
