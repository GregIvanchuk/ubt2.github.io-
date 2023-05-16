import styles from './Pr5.module.css';
import {Link} from "react-router-dom";
import React from 'react';
function Pr5() {
    const img = ["/images/Photos/pr11.jpg","/images/Photos/pr32.jpg","/images/Photos/pr33.jpg","/images/Photos/pr34.jpg","/images/Photos/pr35.jpg","/images/Photos/pr36.jpg","/images/Photos/pr37.jpg","/images/Photos/pr38.jpg","/images/Photos/pr39.jpg"]
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
export default Pr5;
