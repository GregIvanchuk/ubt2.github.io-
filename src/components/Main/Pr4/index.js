import styles from './Pr4.module.css';
import { Link } from "react-router-dom";
import React from "react";

function Pr4() {
  const [itemIndex, setItemIndex] = React.useState(null);
  const [itemClicked, setItemClicked] = React.useState(false);
  const [itemIndexV, setItemIndexV] = React.useState(null);
  const [itemClickedV, setItemClickedV] = React.useState(false);
 
  const funcV = (index) => {
    setItemClickedV(!itemClickedV)
    setItemIndexV(index);
  };

  const func = (index) => {
    setItemClicked(!itemClicked)
    setItemIndex(index);
  };
 
    const imgv = ["/images/Photos/pr41v.png","/images/Photos/pr42v.png","/images/Photos/pr43v.png","/images/Photos/pr44v.png"]
    const img = ["/images/Photos/pr41.png","/images/Photos/pr42.png","/images/Photos/pr43.png","/images/Photos/pr44.png","/images/Photos/pr45.png","/images/Photos/pr46.png"]
  return (
    <>
    <div className={styles.wrapper}>
      <div className={styles.aboutUs}>
                    <div className={styles.aboutUsContent}>
                      <h1>ЖК «Avalon Yard» 136 м²</h1>
                      <p>
                        <li>Проєкт просторої квартири для родини з двома маленькими дітьми. Головним акцентом є поєднання теплих кольорів з натуральним деревом та білими елементами.</li>
                        <li>Велика кухня-вітальня з вбудованою технікою. Центральне місце займає м’який диван для всієї родини. Спальня для батьків простора та світла. Передбачене окреме місце для туалетного столика та колиска для немовляти. Окремий гардероб, який виконує також функцію кімнати для прання. Кабінет в якому можна зосередитись на роботі. Спальня-ігрова для дитини вміщає багато атракцій, задовольняючи її активність. Балкон виконує функцію тераси на якій пара полюбляє пити трав’яний чай</li> 
                      </p>
                      <Link to="/projects"><button className={styles.button}>Повернутися назад</button></Link>
                    </div>
                    {/* <img src="/images/Photos/pr12.JPG" alt="" /> */}
                  </div>
        <div className={styles.gallery}>
          {img.map((item, index) => (
            <div key={index} className={(itemIndex === index && itemClicked  )   ? styles.activeCont : styles.cont} ><img
              onClick={() => func(index)}
              key={index}
              className={(itemIndex === index && itemClicked  ) ? styles.activeImg : styles.img}
              src={item}
            />
            </div>
          ))}
          {imgv.map((item, index) => (
            <div key={index} className={(itemIndexV === index && itemClickedV  )   ? styles.activeCont : styles.cont} ><img
              onClick={() => funcV(index)}
              key={index}
              className={(itemIndexV === index && itemClickedV  ) ? styles.activeImgV : styles.imgV}
              src={item}
            />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Pr4;
