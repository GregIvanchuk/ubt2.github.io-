import styles from './Header.module.css';
import React from "react";
import { Helmet } from 'react-helmet';
import {Link} from "react-router-dom";
function Header() {
  let  [open,setOpen] = React.useState("true")
    let openHandler = () => {
        setOpen(!open);
      }
  return (
    <>
      <header className={styles.header}>
      <div className={styles.header_container}>
      <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Catamaran&family=El+Messiri&display=swap" rel="stylesheet"/>
    </Helmet>
        <div className={styles.leftHeader}>
            {/* <img width={30} height={30} src="/images/Vector.png" /> */}
            <div className={styles.store_title}>
                <h3 className={styles.title_store}>S.P. S T U D I O</h3>
                 <h4>A R  C  H  I  T  E  C  T  U  R  E   &   D  E  S  I  G  N</h4> 
            </div>
        </div>
        <div className={open ? styles.menu : styles.menu + " " + styles.active }>
        <ul onClick={() => openHandler()} className={styles.rigthHeader}>
        <li>
           <a href="tel:+380937725057">+380 (93) 772-50-57</a>
            </li>
           <li>
           <Link to="/">
                    ГОЛОВНА
                </Link>
            </li>
            <li>
            <Link to="/services">
                    ПОСЛУГИ
                </Link>
            </li>
            <li>
            <Link to="/projects">
                    НАШІ РОБОТИ
                </Link>
                </li>
                <li>
                <Link to="/about">
                   ПРО НАС
                </Link>
                </li>
            <li>
            <Link to="/contacts">
                   КОНТАКТИ
                </Link>
            </li>
        </ul>
        </div>
        <div onClick={() => openHandler()}  className={ open ? styles.burger :  styles.burger + " " + styles.active}>
        <span></span>
      </div>
      </div>
    </header>
    </>
  );
}

export default Header;
