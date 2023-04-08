import styles from './Card.module.css';
import {Link} from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Link as ScrollLink, scroller  } from "react-scroll";
function Card(props) {
  const [parentData, setParentData] = useState(0)
  const slides=[
    ["/images/slide1.jpg","/images/slide2.jpg","/images/slide3.jpg",],
    ["/images/woman1.jpg","/images/woman2.jpg","/images/man.jpg",],
    ["/images/vit1.jpg","/images/vit2.jpg","/images/vit3.jpg","/images/vit4.jpg",],
    ["/images/ch1.jpg","/images/ch3.jpg","/images/ch4.jpg",],  
    ["/images/bh1.jpg","/images/bh2.jpg","/images/bh3.jpg","/images/bh4.jpg","/images/bh5.jpg",],
  ]
      const [currentIndex, setcurrentIndex] = useState(0);
    //   useEffect(() => {
    //     const intervalId = setInterval(() => {
    //       goToNext();
    //     }, 3000);
    //     return () => clearInterval(intervalId);
    // }, [currentIndex]);
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
    const PortItems = [{id:0, img:"/images/slide2.jpg", title: "ВІТАЛЬНІ", text: "Ми із задоволенням створимо новий приголомшливий дизайн інтер’єру для вашої вітальні з урахуванням усіх ваших побажань та міркувань, щоб він викликав тільки позитивні емоції."},
                       {id:1, img:"/images/slide2.jpg", title: "СПАЛЬНІ", text: "Створимо дизайн для вашої спальні, щоб Вам було зручно і комфорно відпочивати і насолоджуватись затишною атмосферою. Адже спальня це місце де ми проводимо найбільше часу."},
                       {id:2, img:"/images/slide2.jpg", title: "КУХНІ", text: "Незалежно від того, чи є це частиною житлового будинку чи квартири, добре структурована та оформлена кухня є життєво важливою для комфортного проживання незалежно від розміру."},
                       {id:3, img:"/images/slide2.jpg", title: "КОРИДОР", text: "Шукаєте ідею створити новий або перетворити старий коридор? Довіртеся нашим винятково кваліфікованим дизайнерам та архітекторам, якщо ви прагнете досягти найкращих результатів."},
                       {id:4, img:"/images/slide2.jpg", title: "ДИТЯЧІ", text: "Наші навички та професіоналізм дозволяють нам працювати над візуальним та функціональним вдосконаленням дитячих, ваші діти будуть приємно вражені."},
                    //  {id:5, img:"/images/slide2.jpg", title: "КАБІНЕТ", text: "Наша дизайнерська студія часто займається реконструкцією та переробкою кабінету. Ми зможемо успішно перетворити ваш офіс у візуально привабливий центр ділової активності."},
                    //  {id:6, img:"/images/slide2.jpg", title: "ВАННА КІМНАТА", text: "Ванна кімната – місце, де починається та закінчується кожен новий день. Оформлення даного приміщення може стати джерелом втілення Ваших бажань та наших сміливих креативних ідей."},
                    //  {id:7, img:"/images/slide2.jpg", title: "ДИЗАЙН ЕКСТЕР'ЄРУ", text: "Ми із задоволенням створимо новий приголомшливий дизайн інтер’єру для вашої вітальні з урахуванням усіх ваших побажань та міркувань, щоб він викликав тільки позитивні емоції."},
                    ]
                     const handleClick = (event) =>{
                      setParentData(event.target.dataset.buttonNumber);   
                     }
                     function handleClickSlider()  {
                         scroller.scrollTo("slider", {
                           duration: 800,
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
                </section>
       <div className={styles.ourProjects}>
                    <div className={styles.ourItems}>
                    <div className={`${styles.ourItem} ${styles.ourItem1}`}>
                      <img className={styles.ourItemImg} height={242} width={400} src="/images/slide2.jpg" />
                      <h3>ВСІ ПРОЕКТИ</h3>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nihil consequuntur, minima tenetur nemo qui neque doloribus voluptatum, quis mollitia quam provident quibusdam itaque culpa corrupti magni! Veniam, ratione nisi.</p>
                      <Link to="/gallery"><button >Переглянути</button></Link>
                    </div>     
                   { PortItems.map((item,id) =>
                    <div className={styles.ourItem}>
                      <img className={styles.ourItemImg} height={260} width={400} src={item.img} />
                      <h3>{item.title}</h3>
                     <p>{item.text}</p>
                     <ScrollLink onClick={handleClickSlider}  to="/slider" >  <button onClick={(event)=>handleClick(event)} data-button-number={id} >Переглянути</button></ScrollLink>
                    </div>     
                    )}    
                    </div>
                  </div>
                      
    </>
  );
}
export default Card;
