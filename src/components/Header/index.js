import styles from './Header.module.css';
import React, {useEffect,useState} from "react";
import { Helmet } from 'react-helmet';
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink, scroller  } from "react-scroll";

function Header() {
  const [activeItem, setActiveItem] = React.useState(0);
  let  [open,setOpen] = React.useState("true")
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const scrollThreshold = 50;
  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    if (currentPosition < scrollPosition && isVisible) {
      setIsVisible(false);
    } else if (currentPosition > scrollPosition && !isVisible) {
      setIsVisible(true);
    }
    setScrollPosition(currentPosition);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible, scrollPosition]);
    let openHandler= () => {
        setOpen(!open);
      }
      
      function handleClickServices() {
  
        scroller.scrollTo("services", {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: -30,
        });
        setActiveItem(1)
        setOpen(!open);
      }
      function handleClickProjects() {
        scroller.scrollTo("projects", {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: -40,
        });
        setActiveItem(2);
        setOpen(!open);
      }
      function handleClickAbout() {
        scroller.scrollTo("about", {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: -120,
        });
        setActiveItem(3);
        setOpen(!open);
      }
      function handleClickContacts() {
        scroller.scrollTo("contacts", {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: 40,
        });
        setActiveItem(4);
        setOpen(!open);
      }
  return (
    <>
      <header className={isVisible ? styles.header : ""}>
      <div className={styles.header_container}>
      <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Catamaran&family=El+Messiri&display=swap" rel="stylesheet"/>

    </Helmet>
        <div className={styles.leftHeader}>
            {/* <img width={30} height={30} src="/images/Vector.png" /> */}
            <RouterLink to="/"> <div className={styles.store_title}>
                <h3 className={styles.title_store}>S.P. STUDIO</h3>
                 <h4>A R  C  H  I  T  E  C  T  U  R  E   &   D  E  S  I  G  N</h4> 
            </div>
            </RouterLink>
        </div>
        <div className={open ? styles.menu : styles.menu + " " + styles.active }>
        <ul  onClick={() => openHandler()}   className={styles.rigthHeader}>
        <li>
           <a href="tel:+380937725057">+380 (93) 772-50-57</a>
            </li>
           <li >
           <RouterLink className={activeItem === 0 ? styles.activen : ''} onClick={() => setActiveItem(0)}  to="/">
                    ГОЛОВНА
                </RouterLink>
            </li>
            <li >
            <RouterLink className={activeItem === 1 ? styles.activen : ''}  onClick={handleClickServices} to="/services">
                    ПОСЛУГИ
                </RouterLink>
            </li>
            <li>
            <RouterLink  className={activeItem === 2 ? styles.activen : ''} onClick={handleClickProjects} to="/projects">
                    НАШІ РОБОТИ
                </RouterLink>
                </li>
                <li >
                <RouterLink className={activeItem === 3 ? styles.activen : ''}  onClick={handleClickAbout} to="/about">
                   ПРО НАС
                </RouterLink>
                </li>
            <li>
            <RouterLink className={activeItem === 4 ? styles.activen : ''} onClick={handleClickContacts}  to="/contacts">
                   КОНТАКТИ
                   </RouterLink>
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
