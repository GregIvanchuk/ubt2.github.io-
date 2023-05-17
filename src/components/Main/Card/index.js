import styles from './Card.module.css';
import {Link} from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Link as ScrollLink, scroller  } from "react-scroll";
function Card(props) {
  const [parentData, setParentData] = useState(0)
  const slides=[
    ["/images/Photos/pr44.jpg","/images/Photos/pr14.jpg","/images/Photos/pr47.jpg","/images/Photos/pr33.jpg","/images/Photos/pr37.jpg"],
    
  ]
  // ["/images/woman1.jpg","/images/woman2.jpg","/images/man.jpg",],
  //   ["/images/vit2.jpg","/images/vit3.jpg","/images/vit4.jpg",],
  //   ["/images/ch1.jpg","/images/ch3.jpg","/images/ch4.jpg",],  
  //   ["/images/bh2.jpg","/images/bh3.jpg","/images/bh4.jpg","/images/bh5.jpg",],
      const [currentIndex, setcurrentIndex] = useState(0);
      const goToPrevios = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides[parentData].length - 1 : currentIndex - 1;
        setcurrentIndex(newIndex);
      };
      const goToNext = () => {
        const isLastSlide = currentIndex === slides[parentData].length - 1;
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

   /*-------------------------------------------------------------------------------------------------------*/
  /*-------------------------------------------------------------------------------------------------------*/

    const [catId, setCatId]=React.useState(0)
                     const handleClick = (event) =>{
                      setParentData(event.target.dataset.buttonNumber);   
                     }
                     function handleClickSlider()  {
                         scroller.scrollTo("slider", {
                           duration: 1000,
                           delay: 0,
                           smooth: "easeInOutQuart",
                           offset:-50,
                         });
                       }

  return (
    <>
    <section id='slider'>
    <div  className={styles.sliderStyles}>
              <section id='home'>
            <h1>НАШІ РОБОТИ</h1>
            </section>
                    <div  className={styles.slideStyles} >
                          <img width={1000} height={500}  src={slides[parentData][currentIndex]}/> 
                    </div>
                    <div  className={styles.arrows} >
                          <img onClick={goToPrevios} className={styles.leftArrowStyles} height={32} width={32} src="/images/rarrow.png"  alt="" />
                        <img className={styles.rightArrowStyles} onClick={goToNext} height={32} width={32} src="/images/larrow.png" alt="" />
                        </div>
                    <div  className={styles.dotsContainer}>
              {slides[parentData].map((item,slideIndex)=><img src={item} width={200} height={100} onClick={() => goToSlide(slideIndex)} 
               className={`${styles.dots} ${currentIndex === slideIndex ? styles.activeDot : ''}`}  key={slideIndex}/>)}
                    </div>
                </div>
                </section>
            <div className={styles.ourProjects}>
                    <div className={styles.ourItems}>
                    
                   {/* { PortItems.map((item,id) =>
                    <div key={id} className={styles.ourItem}>
                      <img className={styles.ourItemImg} height={260} width={400} src={item.img} />
                      <div className={styles.text}>
                      <h3>{item.title}</h3>
                     <p>{item.text}</p>
                     </div>
                     <ScrollLink onClick={handleClickSlider}  to="/slider" >  <button onClick={(event)=>handleClick(event)} data-button-number={id} >Переглянути</button></ScrollLink>
                     
                    )}     */}

                    <div className={`${styles.ourItem} ${styles.ourItem1}`}>
                      <img className={styles.ourItemImg} height={242} width={400} src="/images/Photos/pr11.JPG" />
                      <div className={styles.content}>
                      <h3>ПРОЕКТ №1</h3>
                      <Link to="/pr1"><button >Переглянути</button></Link>
                      </div>
                     </div>
                      
                    
                    <div className={`${styles.ourItem} ${styles.ourItem1}`}>
                      <img className={styles.ourItemImg} height={242} width={400} src="/images/Photos/pr21.PNG"/>
                      <div className={styles.content}>
                      <h3>ПРОЕКТ №2</h3>
                      <Link to="/pr2"><button >Переглянути</button></Link>
                      </div>
                     </div>
                      
                    <div className={`${styles.ourItem} ${styles.ourItem1}`}>
                      <img className={styles.ourItemImg} height={242} width={400} src="/images/Photos/pr31.jpg" />
                      <div className={styles.content}>
                      <h3>ПРОЕКТ №3</h3>
                      <Link to="/pr3"><button >Переглянути</button></Link>
                      </div>
                     </div>
                      
                    
                    <div className={`${styles.ourItem} ${styles.ourItem1}`}>
                      <img className={styles.ourItemImg} height={242} width={400} src="/images/Photos/pr41.jpg"  />
                      <div className={styles.content}>
                      <h3>ПРОЕКТ №4</h3>
                      <Link to="/pr4"><button >Переглянути</button></Link>
                      </div>
                     </div>
                     
                    
                    <div className={`${styles.ourItem} ${styles.ourItem1}`}>
                      <img className={styles.ourItemImg} height={242} width={400} src="/images/Photos/pr51.PNG"/>
                      <div className={styles.content}>
                      <h3>ПРОЕКТ №5</h3>
                      <Link to="/pr5"><button >Переглянути</button></Link>
                     </div>
                     </div>
          
                    
                    <div className={`${styles.ourItem} ${styles.ourItem1}`}>
                      <img className={styles.ourItemImg} height={242} width={400} src="/images/Photos/pr61.jpg" />
                      <div className={styles.content}>
                      <h3>ПРОЕКТ №6</h3>
                      <Link to="/pr6"><button >Переглянути</button></Link>
                      </div>
                     </div>
                    </div>
                  </div>
                      
    </>
  );
}
export default Card;
