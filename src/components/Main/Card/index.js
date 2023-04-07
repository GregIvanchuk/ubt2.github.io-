import styles from './Card.module.css';
import {Link} from "react-router-dom";
import React from 'react';
function Card(props) {
    const [catId, setCatId]=React.useState(0)
    const PortItems = [{id:0, img:"/images/slide2.jpg", title: "ВІТАЛЬНІ", text: "Ми із задоволенням створимо новий приголомшливий дизайн інтер’єру для вашої вітальні з урахуванням усіх ваших побажань та міркувань, щоб він викликав тільки позитивні емоції."},
                     {id:1, img:"/images/slide2.jpg", title: "СПАЛЬНІ", text: "Створимо дизайн для вашої спальні, щоб Вам було зручно і комфорно відпочивати і насолоджуватись затишною атмосферою. Адже спальня це місце де ми проводимо найбільше часу."},
                     {id:2, img:"/images/slide2.jpg", title: "КУХНІ", text: "Незалежно від того, чи є це частиною житлового будинку чи квартири, добре структурована та оформлена кухня є життєво важливою для комфортного проживання незалежно від розміру."},
                     {id:3, img:"/images/slide2.jpg", title: "КОРИДОР", text: "Шукаєте ідею створити новий або перетворити старий коридор? Довіртеся нашим винятково кваліфікованим дизайнерам та архітекторам, якщо ви прагнете досягти найкращих результатів."},
                     {id:4, img:"/images/slide2.jpg", title: "ДИТЯЧІ", text: "Наші навички та професіоналізм дозволяють нам працювати над візуальним та функціональним вдосконаленням дитячих, ваші діти будуть приємно вражені."},
                    //  {id:5, img:"/images/slide2.jpg", title: "КАБІНЕТ", text: "Наша дизайнерська студія часто займається реконструкцією та переробкою кабінету. Ми зможемо успішно перетворити ваш офіс у візуально привабливий центр ділової активності."},
                    //  {id:6, img:"/images/slide2.jpg", title: "ВАННА КІМНАТА", text: "Ванна кімната – місце, де починається та закінчується кожен новий день. Оформлення даного приміщення може стати джерелом втілення Ваших бажань та наших сміливих креативних ідей."},
                    //  {id:7, img:"/images/slide2.jpg", title: "ДИЗАЙН ЕКСТЕР'ЄРУ", text: "Ми із задоволенням створимо новий приголомшливий дизайн інтер’єру для вашої вітальні з урахуванням усіх ваших побажань та міркувань, щоб він викликав тільки позитивні емоції."},
                    ]
            
                    
                     const handleClick = (event) =>{
                        // setCatId(event.target.dataset.buttonNumber);
                        props.callback(event.target.dataset.buttonNumber);
                     }
  return (
    <>
       <div className={styles.ourProjects}>
                    <h1>НАШІ РОБОТИ</h1>
                    <div className={styles.ourItems}>
                    <div className={styles.ourItem}>
                      <img className={styles.ourItemImg} height={250} width={400} src="/images/slide2.jpg" />
                      <h3>ВСІ ПРОЕКТИ</h3>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nihil consequuntur, minima tenetur nemo qui neque doloribus voluptatum, quis mollitia quam provident quibusdam itaque culpa corrupti magni! Veniam, ratione nisi.</p>
                      <Link to="/gallery"><button >Переглянути</button></Link>
                    </div>     
                   { PortItems.map((item,id) =>
                    <div className={styles.ourItem}>
                      <img className={styles.ourItemImg} height={250} width={400} src={item.img} />
                      <h3>{item.title}</h3>
                     <p>{item.text}</p>
                      <Link to="/portfolio"><button onClick={(event)=>handleClick(event)} data-button-number={id} >Переглянути</button></Link>
                    </div>     
                    )}    
                    </div>
                  </div>
                      
    </>
  );
}
export default Card;
