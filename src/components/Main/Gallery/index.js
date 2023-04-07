import styles from './Gallery.module.css';
import {Link} from "react-router-dom";
import React from 'react';
function Gallery() {
    const img = ["/images/slide1.jpg","/images/slide2.jpg","/images/slide3.jpg","/images/vit1.jpg","/images/vit2.jpg","/images/vit3.jpg","/images/vit4.jpg","/images/ch1.jpg","/images/ch3.jpg","/images/ch4.jpg","/images/bh1.jpg","/images/bh2.jpg","/images/bh3.jpg","/images/bh4.jpg",]
  return (
    <>
    <div className={styles.wrapper}>
    <h1>НАШІ ПРОЕКТИ</h1>
    <div className={styles.gallery}>
      {img.map((item,index) => <img className={styles.img} src={item}/>)}
    </div>
    </div>
    </>
  );
}
export default Gallery;
