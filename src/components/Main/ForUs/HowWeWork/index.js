import styles from './HowWEWork.module.css';
import { Helmet } from 'react-helmet';
function HowWEWork() {
  return (
    <>   
    <div className={styles.wrapper}>
        <h1>ЯК МИ ПРАЦЮЄМО</h1>
        <div className={styles.container}>
            <div className={styles.item1 }>
               <div className={styles.header}>
                <div className={styles.header_numder}>01</div>
                <div className={styles.header_title}>ЗНАЙОМСТВО</div>
                <div className={styles.header_line}></div>
                <ul>
                    <li>консультація</li>
                    <li>презентація</li>
                    <p>послуг та прикладу готового проєкту</p>
                </ul>
               </div>
            </div>

            <div className={styles.item2}>
               <div className={styles.header}>
                <div className={styles.header_numder}>02</div>
                <div className={styles.header_title}>ЗАНУРЕННЯ</div>
                <div className={styles.header_line}></div>
                <ul>
                    <li>підписання угоди</li>
                    <li>оплата 50% авансу</li>

                    <p>Брифування опитник</p>

                    <li>формування технічного завдання</li>
                    <li>обговорення аналогів</li>

                    <p>Заміри об’єкту</p>

                    <li>обміри</li>
                    <li>фотофіксація</li>
                    <li>розробка обмірного плану</li>
                    <li>розробка 3D моделі</li>
                </ul>
               </div>
            </div>

            <div className={styles.item3}>
               <div className={styles.header}>
                <div className={styles.header_numder}>03</div>
                <div className={styles.header_title}>ДИЗАЙН</div>
                <div className={styles.header_line}></div>
                <ul>
                   <p>Планування</p>
                   <li>розробка 2-3 різних варіантів планування</li>

                    <p>Візуалізація</p>

                    <li>поетапна розробка та затвердження всіх візуалізацій</li>
                    <li>оплата 30%</li>

                    <p>Заміри об’єкту</p>
                    <p>Специфікація</p>
                    <li>розробка специфікації (сантехніка, освітлення, кухня і тд)</li>
                </ul>
               </div>
            </div>

            <div className={styles.item4}>
               <div className={styles.header}>
                <div className={styles.header_numder}>04</div>
                <div className={styles.header_title}>КРЕСЛЕННЯ</div>
                <div className={styles.header_line}></div>
                <ul>
                    <li>розробка усіх необхідних креслень</li>
                    <li>оплата 20%</li>
                    <li>Видача проєкту</li>
                </ul>
               </div>
            </div>

            <div className={styles.item5}>
               <div className={styles.header}>
                <div className={styles.header_numder}>05</div>
                <div className={styles.header_title}>РЕАЛІЗАЦІЯ</div>
                <div className={styles.header_line}></div>
                <ul>
                   <p>Виконання всіх ремонтних робіт згідно розробленого дизайну</p>
                </ul>
               </div>
            </div>

        </div>
        </div>  
            
    </>
  );
}

export default HowWEWork;
