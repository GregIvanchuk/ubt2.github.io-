import styles from './Pr5.module.css';
import { Link } from "react-router-dom";
import React from "react";

function Pr5() {
  const [itemIndex, setItemIndex] = React.useState(null);
  const [itemClicked, setItemClicked] = React.useState(false);

  const func = (index) => {
    setItemClicked(!itemClicked)
    setItemIndex(index);
  };
    const imgh = ["/images/Photos/pr52.jpg","/images/Photos/pr53.jpg","/images/Photos/pr8.jpg","/images/Photos/pr9.jpg",]
    const imgv = ["/images/Photos/pr1v.jpg","/images/Photos/pr2v.jpg","/images/Photos/pr3v.jpg","/images/Photos/pr51v.jpg","/images/Photos/pr52v.jpg","/images/Photos/pr53v.jpg","/images/Photos/pr54v.jpg","/images/Photos/pr55v.jpg"]
  return (
    <>
    <div className={styles.wrapper}>
      <div className={styles.aboutUs}>
                    <div className={styles.aboutUsContent}>
                      <h1>Запоріжжя ЖК «Комфорт Таун» 59 м²</h1>
                      <p>
                        <li>Дизайн для квартири молодого подружжя, що працюють віддалено. В даному проєкті кухня об’єднана з вітальнею, також в цьому приміщенні передбачена невелика робоча зона. Сама квартира дуже світла виконана в м’яких пастельних тонах. </li>
                        <li>Через обмежений простір замість обіднього столу було вирішено використати барну стійку, що прилягає до стільниці. Спальня простора з сонячної сторони, завдяки чому цілий день наповнена світлом. Тут передбачена містка шафа на всю стіну. Кабінет в якому можна зосередитись на роботі.</li> 
                      </p>
                      <Link to="/projects"><button className={styles.button}>Повернутися назад</button></Link>
                    </div>
                    {/* <img src="/images/Photos/pr12.JPG" alt="" /> */}
                  </div>
        <div className={styles.gallery}>
          {imgh.map((item, index) => (
            <div key={index} className={(itemIndex === index && itemClicked  )   ? styles.activeCont : styles.cont} ><img
              onClick={() => func(index)}
              key={index}
              className={(itemIndex === index && itemClicked  ) ? styles.activeImg : styles.img}
              src={item}
            />
            </div>
          ))}
           {imgv.map((item, index) => (
            <div key={index} className={(itemIndex === index && itemClicked  )   ? styles.activeCont : styles.cont} ><img
              onClick={() => func(index)}
              key={index}
              className={(itemIndex === index && itemClicked  ) ? styles.activeImgV : styles.imgV}
              src={item}
            />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Pr5;
