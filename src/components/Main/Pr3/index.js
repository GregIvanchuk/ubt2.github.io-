import styles from './Pr3.module.css';
import { Link } from "react-router-dom";
import React from "react";

function Pr3() {
  const [itemIndex, setItemIndex] = React.useState(null);
  const [itemClicked, setItemClicked] = React.useState(false);

  const func = (index) => {
    setItemClicked(!itemClicked)
    setItemIndex(index);
  };
    const imgv = ["/images/Photos/pr33v.jpg","/images/Photos/pr31v.jpg","/images/Photos/pr32v.jpg","/images/Photos/pr34v.jpg",]
    const img = ["/images/Photos/pr43.jpg" ,"/images/Photos/pr44.jpg","/images/Photos/pr45.jpg","/images/Photos/pr46.jpg","/images/Photos/pr47.jpg","/images/Photos/pr48.jpg"]
  return (
    <>
    <div className={styles.wrapper}>
      <div className={styles.aboutUs}>
                    <div className={styles.aboutUsContent}>
                      <h1>м. Ірпінь, ЖК «Синергія» 95 м²</h1>
                      <p>
                        <li>Проєкт для подружжя. Центральним місцем у квартирі є простора кухня-вітальня. Це місце для спілкування та відпочинку. Там можна  подивитись фільми, поспілкуватись під час приготування вечері, почитати на дивані та чаювати за великим обіднім столом.</li>
                        <li> Майстер-спальня виконана в темних кольорах, однак, велика кількість різноманітної підсвітки робить її затишною. Також в цій кімнаті передбачена окрема ванна кімната та місткий гардероб. Відокремлена гостьова кімната. Основним акцентом в ній є стіна з натурального каменю позаду ліжок. В цій кімнаті зупиняються гості та дорослі діти подружжя що інколи приїжджають.</li> 
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
export default Pr3;
