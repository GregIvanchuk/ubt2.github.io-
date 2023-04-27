import HowWEWork from '../HowWeWork';
import styles from './ForUs.module.css';
import YellowBlock from './YellowBlock';
const ForUs = () =>{
    return(
      <>
      <section id='home'>
                    <p className={styles.dot} >.</p>
                    </section>
      <div className={styles.aboutUs}>
                    <div className={styles.aboutUsContent}>
                      <h1>ПЕРЕВАГИ РОБОТИ З НАМИ</h1>
                      <p><li>S. P. STUDIO - досвідчена команда професіоналів з розробки дизайну інтер'єру та ремонту приміщень, кожен з нас має відповідну освіту та довгостроковий досвід роботи у своїй сфері;</li>
<li>Широкий спектр послуг, які ми надаємо, включаючи розробку дизайну, підбір та закупівлю матеріалів, ремонт квартир та авторський нагляд по ремонту житлових чи комерційних приміщень;</li>
<li>Індивідуальний підхід до кожного клієнта та здійснення проектів з урахуванням його потреб та бюджету;</li>
<li>Використання тільки якісних матеріалів від надійних виробників, що гарантує високу якість виконаних робіт;</li>
<li>Робота згідно з усіма правилами, стандартами та нормами безпеки.</li>
</p>
                      <div className={styles.regals}>
                        <div className={styles.regal}>
                          <div className={styles.regalText}>
                            <p>Виконані завдання</p>
                            <p>100%</p>
                          </div>
                          <div className={styles.regalLine}></div>
                        </div>
                        <div className={styles.regal}>
                          <div className={styles.regalText}>
                            <p>Задоволені клієнти</p>
                            <p>99%</p>
                          </div>
                          <div className={styles.regalLine}></div>
                        </div>
                      </div>
                    </div>
                    <img src="/images/about.jpg" alt="" />
                  </div>
                  <HowWEWork/>
                    <YellowBlock/>
                  </>
                  )
                  }
                  export default ForUs;