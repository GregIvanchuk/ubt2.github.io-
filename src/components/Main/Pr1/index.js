import styles from './Pr1.module.css';
import {Link} from "react-router-dom";
import React from 'react';
function Pr1() {
    const img = ["/images/Photos/pr11.jpg","/images/Photos/pr12.jpg","/images/Photos/pr13.jpg","/images/Photos/pr14.jpg","/images/Photos/pr15.jpg","/images/Photos/pr16.jpg","/images/Photos/pr17.jpg","/images/Photos/pr18.jpg","/images/Photos/pr19.jpg"]
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
export default Pr1;
