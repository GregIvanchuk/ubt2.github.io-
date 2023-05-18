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
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2683.669333932848!2d24.00014325106172!3d49.82266719322197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae783986b17b1%3A0x13b67269772486bf!2z0YPQuy4g0JPQtdC90LXRgNCw0LvQsCDQp9GD0L_RgNGL0L3QutC4LCAxMTksINCb0YzQstC-0LIsINCb0YzQstC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNzkwMDA!5e0!3m2!1sru!2sua!4v1684261850027!5m2!1sru!2sua" width={1460} height={200} />
        <div className={styles.footer_container}>
           <div className={styles.firstBlock}>
            <div className={styles.logo_promo}>
                <h3>S.P. Studio</h3>
                <h4>A R  C  H  I  T  E  C  T  U  R  E   &   D  E  S  I  G  N</h4> 
            </div>
            <ScrollLink onClick={handleClickStart}  to="/home"> <button  >Повернутися вгору</button></ScrollLink>
           </div>
           <div className={styles.secondBlock}>
            <h4>КОНТАКТИ</h4>
             <p>E-mail: <a href="mailto:spstudiolviv@gmail.com"target="_blank">spstudiolviv@gmail.com</a></p>
             <p>Телефон:  <a href="tel:+380937725057"> +380 (93) 772-50-57</a></p>
             <p>Графік роботи: Пн-Сб: 09:30 - 18:00</p>
           </div>
           <div className={styles.threeBlock}>
             <a href='https://www.instagram.com/s.p.studio.ua/' target="_blank"><img width={50} height={50} src="/images/instagram.png" alt="instagram" /></a>
             <a href='https://www.facebook.com/profile.php?id=100088519397111' target="_blank"><img width={50} height={50} src="/images/facebook.png" alt="facebook" /></a>
             <a href="tel:+380937725057" ><img width={50} height={50} src="/images/viber.png" alt="viber" /></a>
             <a href='https://t.me/Djozef30' target="_blank" ><img width={55} height={55} src="/images/telegram.png" alt="telegram" /></a>
           </div>
        </div>
    </footer>
    </>
  );
}

export default Footer;