import styles from './Pr4.module.css';
import {Link} from "react-router-dom";
import React from 'react';
function Pr4() {
    const img = ["/images/Photos/pr52.png","/images/Photos/pr53.png","/images/Photos/pr54.png","/images/Photos/pr55.png","/images/Photos/pr56.png","/images/Photos/pr57.png"]
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
export default Pr4;
