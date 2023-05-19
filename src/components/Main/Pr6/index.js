import styles from './Pr6.module.css';
import {Link} from "react-router-dom";
import React from 'react';
function  Pr6() {
    const img = ["/images/Photos/pr62.jpg","/images/Photos/pr63.jpg","/images/Photos/pr64.jpg","/images/Photos/pr65.jpg","/images/Photos/pr66.jpg","/images/Photos/pr67.jpg","/images/Photos/pr68.jpg"]
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
export default Pr6;
