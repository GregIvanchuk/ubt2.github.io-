import styles from './Pr6.module.css';
import {Link} from "react-router-dom";
import React from 'react';
function  Pr6() {
    const img = ["/images/Photos/pr22.png","/images/Photos/pr23.png","/images/Photos/pr24.png","/images/Photos/pr25.png","/images/Photos/pr26.png","/images/Photos/pr27.png","/images/Photos/pr28.png","/images/Photos/pr29.png",]
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
export default Pr6;
