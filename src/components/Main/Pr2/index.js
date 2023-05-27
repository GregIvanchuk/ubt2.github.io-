import styles from './Pr2.module.css';
import { Link } from "react-router-dom";
import React from "react";

function Pr2() {
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
    const imgv = ["/images/Photos/pr21v.PNG","/images/Photos/pr22v.PNG","/images/Photos/pr23v.PNG","/images/Photos/pr24v.PNG",]
    const img = ["/images/Photos/pr22.PNG","/images/Photos/pr23.PNG","/images/Photos/pr24.PNG","/images/Photos/pr25.PNG","/images/Photos/pr26.PNG","/images/Photos/pr27.PNG","/images/Photos/pr28.PNG","/images/Photos/pr29.PNG"]
  return (
    <>
    <div className={styles.wrapper}>
    <section id='home'>
      <div className={styles.aboutUs}>
                    <div className={styles.aboutUsContent}>
                      <h1>м. Львів, Таун Хаус 120 м²</h1>
                      <p>
                        <li>Проєкт приватного особняка для родини з однією дитиною. Для подружжя окрема спальня з мансардним вікном в темних кольорах з невеликою робочою зоною. Спальня для доньки 10 років. Передбачена окрема стіна для малюнків крейдою. Ця кімната зроблена в сучасному інтер’єрі та її легко буде адаптувати під зміну вподобань дитини з віком. Відкрита тераса для усамітнення з книгою. Великий гардероб, який закриває потреби всієї родини. Семе тому в цьому проєкті в житлових кімнатах майже немає місця для зберігання одягу. Кухня хоч і не велика, однак вода дуже ергономічна. Вміщає в себе всю необхідну побутову техніку та достатню площу робочої поверхні.</li>
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
        </div>
      </div>
    </>
  );
}
export default Pr2;
