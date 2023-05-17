import styles from './Pr2.module.css';
import {Link} from "react-router-dom";
import React from 'react';
function Pr2() {
    const img = ["/images/Photos/pr22.PNG","/images/Photos/pr23.PNG","/images/Photos/pr24.PNG","/images/Photos/pr25.PNG","/images/Photos/pr26.PNG","/images/Photos/pr27.PNG","/images/Photos/pr28.PNG","/images/Photos/pr29.PNG"]
  return (
    <>
    <div className={styles.wrapper}>
    <section id="home">
    <h1>----------</h1>
    </section>
    <div className={styles.gallery}>
      {img.map((item,index) => <img key={index} className={styles.img} src={item}/>)}
    </div>
    </div>
    </>
  );
}
export default Pr2;
