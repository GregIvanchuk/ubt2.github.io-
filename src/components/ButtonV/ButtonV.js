import styles from './ButtonV.module.css';
import { useState } from 'react';
import { Link as ScrollLink, scroller  } from "react-scroll";
function handleClickStart()  {
  scroller.scrollTo("home", {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  });
}
function ButtonV() {  
    const [isClicked , setIsClicked] = useState(false);
    const clickHandler = () => {
        setIsClicked(!isClicked);
    }
  return (
    <>
   
   <ScrollLink onClick={handleClickStart}  to="/home"> 
   <div className={styles.cont}>
                  <img src="/images/arr.png" alt="arr" />
            </div>
            </ScrollLink>
             
    </>
  );
}

export default ButtonV;