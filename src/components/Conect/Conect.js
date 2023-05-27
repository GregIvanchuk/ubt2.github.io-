import styles from './Conect.module.css';
import { useState } from 'react';

function Conect() {  
    const [isClicked , setIsClicked] = useState(false);
    const clickHandler = () => {
        setIsClicked(!isClicked);
    }
  return (
    <>
     { isClicked ?
                  <div className={styles.Cont}>
                  <div className={styles.items}>
                  <a href="viber://chat?number=+380937725057"><img width={80} height={80} src="/images/viber.png" alt="viber" /></a>
             <a  href="https://t.me/+380937725057" target="_blank" ><img width={80} height={80} src="/images/telegram.png" alt="telegram" /></a>
                  </div>
                  <div  onClick={clickHandler} className={styles.conect1}>
                  <img height={50} width={50} src="/images/cl.png" alt="chat" />
                  </div>
                 </div>
                :
                <div onClick={clickHandler}  className={styles.conect}>
                <img height={50} width={50} src="/images/chat.png" alt="chat" />
            </div>
                }
    </>
  );
}

export default Conect;