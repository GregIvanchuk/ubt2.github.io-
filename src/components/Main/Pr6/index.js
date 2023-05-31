import styles from './Pr6.module.css';
import { Link } from "react-router-dom";
import React from "react";

function Pr6() {
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
  const img = []
  const imgv = ["/images/Photos/pr62.jpg","/images/Photos/pr63.jpg","/images/Photos/pr64.jpg","/images/Photos/pr65.jpg","/images/Photos/pr66.jpg","/images/Photos/pr67.jpg","/images/Photos/pr68.jpg","/images/Photos/pr61v.jpg","/images/Photos/pr62v.jpg","/images/Photos/pr63v.jpg"]
  return (
    <>
    <div className={styles.wrapper}>
    <section id='home'>
      <div className={styles.aboutUs}>
                    <div className={styles.aboutUsContent}>
                      <h1>ЖК «Montreal House» 53 м²</h1>
                      <p>
                        <li>Смарт квартира для дівчини. Максимально компактна кухня об’єднана з вітальнею. Світлі стіни з темними деталями та золотими акцентами. А смарагдовий диван стає яскравим підкресленням даної кімнати. Велике та м’яке ліжко, що стоїть на килим створює затишок в спальні. Також передбачений туалетний столик біля вікна. Квартира ідеально повторює витонченість власниці.</li>
                      </p>
                      <Link to="/projects"><button className={styles.button}>Повернутися назад</button></Link>
                    </div>
                    {/* <img src="/images/Photos/pr12.JPG" alt="" /> */}
                  </div>
                  </section>
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
           <Link to="/projects"><button className={styles.button}>Повернутися назад</button></Link>
        </div>
      </div>
    </>
  );
}
export default Pr6;
