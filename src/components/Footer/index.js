import styles from './Footer.module.css';
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, scroller  } from "react-scroll";
function handleClickStart()  {
    scroller.scrollTo("home", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }
  
function Footer() {  
  
  return (
    <>
    <footer>
        <div className={styles.footer_container}>
           <div className={styles.firstBlock}>
            <div className={styles.logo_promo}>
                <h3>S.P. Studio</h3>
                <h4>A R  C  H  I  T  E  C  T  U  R  E   &   D  E  S  I  G  N</h4> 
            </div>
            <button  ><ScrollLink onClick={handleClickStart}  to="/home">Повернутися вгору</ScrollLink></button>
           </div>
           <div className={styles.secondBlock}>
            <h4>КОНТАКТИ</h4>
             <p>E-mail: nataligladii@gmail.com</p>
             <p>Телефон:<a href="tel:+380937725057">+380 (93) 772-50-57</a></p>
             <p>Графік роботи: Пн-Сб: 10 - 19</p>
           </div>
           <div className={styles.threeBlock}>
             <a href='https://www.instagram.com/s.p.studio.ua/'><img width={45} height={45} src="/images/instagram.png" alt="" /></a>
             <a href='https://www.facebook.com/profile.php?id=100088519397111'><img width={45} height={45} src="/images/facebook.png" alt="" /></a>
             <a><img width={45} height={45} src="/images/viber.png" alt="" /></a>
             <a><img width={45} height={45} src="/images/telegram.png" alt="" /></a>
           </div>
        </div>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d158.6452961929309!2d30.48038625836912!3d50.49091359729203!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1678866279717!5m2!1sru!2sua" width={1500}  height={150} ></iframe> */}
    </footer>
    </>
  );
}

export default Footer;