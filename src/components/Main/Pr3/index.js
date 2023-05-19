import styles from './Pr3.module.css';
import {Link} from "react-router-dom";
import React from 'react';
function Pr3() {
    const img = ["/images/Photos/pr43.jpg" ,"/images/Photos/pr44.jpg","/images/Photos/pr45.jpg","/images/Photos/pr46.jpg","/images/Photos/pr47.jpg","/images/Photos/pr48.jpg"]
  return (
    <>
    <div className={styles.wrapper}>
    <div className={styles.gallery}>
      {img.map((item,index) => <img key={index} className={styles.img} src={item}/>)}
    </div>
    </div>
    </>
  );
}
export default Pr3;
