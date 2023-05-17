import styles from './Pr1.module.css';
import {Link} from "react-router-dom";
import React from 'react';
function Pr1() {
    const img = ["/images/Photos/pr11.JPG","/images/Photos/pr12.JPG","/images/Photos/pr13.JPG","/images/Photos/pr14.JPG","/images/Photos/pr15.JPG","/images/Photos/pr16.JPG","/images/Photos/pr17.JPG","/images/Photos/pr18.JPG","/images/Photos/pr19.JPG"]
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
