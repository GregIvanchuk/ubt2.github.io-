import styles from './Pr1.module.css';
import { Link } from "react-router-dom";
import React from "react";

function Pr1() {
  const [itemIndex, setItemIndex] = React.useState(null);
  const [itemClicked, setItemClicked] = React.useState(false);

  const func = (index) => {
    setItemClicked(!itemClicked)
    setItemIndex(index);
  };
  const imgv = ["/images/Photos/pr11v.png",
  "/images/Photos/pr12v.png",
  "/images/Photos/pr13v.png",
  "/images/Photos/pr14v.png",]
  const img = [
    "/images/Photos/pr11.JPG",
    "/images/Photos/pr12.JPG",
    "/images/Photos/pr13.JPG",
    "/images/Photos/pr14.JPG",
    "/images/Photos/pr15.JPG",
    "/images/Photos/pr16.JPG",
    "/images/Photos/pr17.JPG",
    "/images/Photos/pr18.JPG",
    "/images/Photos/pr19.JPG"
  ];

  return (
    <>
      <div className={styles.wrapper}>
      <div className={styles.aboutUs}>
                    <div className={styles.aboutUsContent}>
                      <h1>ЖК «Квіти Львова» 89 м²</h1>
                      <p>
                        <li>Проєкт трьох кімнатної квартири для сімейної пари. Багато відкритих просторів, місце для проведення часу з друзями. Окремий просторий кабінет для спокійної віддаленої роботи вдома. Світла кухня з вбудованою побутовою технікою та елементами з дерева.</li>
                        <li>Акцентним кольором у всій квартирі є смарагдовий в поєднанні з деревом. Стіна з живих рослин додає свіжості та природності в інтер’єрі. Замовникам сподобались прості рішення які водночас є дуже комфортними для їхнього життя.</li>
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

export default Pr1;