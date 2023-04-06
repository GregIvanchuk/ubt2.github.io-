import styles from './ForUs.module.css';
const ForUs = () =>{
    return(
<div className={styles.aboutUs}>
                    <div className={styles.aboutUsContent}>
                      <h1>ПРО НАС</h1>
                      <p> Ми - команда професійних, енергійних людей з талановитими дизайнерами та досвідченими менеджерами, які можуть проводити наших клієнтів через бездоганне та своєчасне виконання будь-якого проекту житлового дизайну.З першого дня ми пропонуємо творчі та затишні інтер'єри для наших клієнтів.</p>
                      <div className={styles.aboutUsBlocks}>
                        {/* <div className={styles.aboutUsBlock}>
                          <div className={styles.aboutUsBlockHead}>
                            <img height={25} width={30} src="/images/i11.png" alt="" />
                          <h3>НАГОРОДИ</h3>
                          </div>
                           <p>Ми отримали численні нагороди за наші дизайни, концепції та ідеї.</p>
                        </div> */}
                        <div className={styles.aboutUsBlock}>
                          <div className={styles.aboutUsBlockHead}>
                          <img height={25} width={30}  src="/images/i10.png" alt="" />
                          <h3>КОМАНДА</h3>
                          </div >
                           <p>Ми - команда спеціалістів, що займаються дизайном інтер'єру.</p>
                        </div>
                      </div>
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
                    <img width={400} height={600} src="/images/about.jpg" alt="" />
                  </div>
                  )
                  }
                  export default ForUs;