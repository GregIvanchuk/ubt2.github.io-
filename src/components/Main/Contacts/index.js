import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import styles from './Contacts.module.css';
function Contacts() {
  const { register, handleSubmit, reset , formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const sendinblueApiKey = process.env.REACT_APP_API_KEY;
    axios({
      method: 'post',
      url: 'https://api.sendinblue.com/v3/smtp/email',
      headers: {
        'Content-Type': 'application/json',
        'api-key': sendinblueApiKey,
      },
      data: {
        sender: { name: data.name, email: data.email },
        to: [{ email:'gregiv99@gmail.com'}],
        subject: data.category,
        htmlContent: `Місто:${data.city}
        <br>Номер телефону: ${data.phone}
        <br>Прізвище та ініціали: ${data.name}
        <br>Електронна адреса: ${data.email}<br>Послуга яку потребує клієнт: ${data.category}`,
      },
    })
      .then(function (response) {
        reset();
        alert("vgghgvh");
      })
      .catch(function (error) {
        alert("vgghgvh");
      });
  };

  return (
    <>
    <div className={styles.wrapper}>
    <div className={styles.content}>
        <div className={styles.contWrapper}>
       
            <h1>НАШІ КОНТАКТИ</h1>
            <h2>АДРЕСА:</h2>
            <a href="https://www.google.com/maps/place/%D0%94%D0%BE%D0%BD%D0%B5%D1%86%D0%BA,+%D0%94%D0%BE%D0%BD%D0%B5%D1%86%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+83000/@47.9901174,37.7615206,11z/data=!3m1!4b1!4m6!3m5!1s0x40e0909500919a2d:0x36335efdc5856f84!8m2!3d48.015883!4d37.80285!16zL20vMDJxYnBk">м.Донецьк просп.Незалежності 107</a>
            <h2>ТЕЛЕФОН:</h2>
            <a href="tel:+380937725057">+380 (93) 772-50-57</a>
            <h2>ГРАФІК РОБОТИ:</h2>
            <p>Пн-Сб: 10 - 19</p>
            {/* <div className={styles.linkSocial}>
                <img src="/images/instagram.png" alt="" />
                <img src="/images/facebook.png" alt="" />
            </div> */}
        </div>
 
    <form onSubmit={handleSubmit(onSubmit)}>
    <section id='home'>
    <h1 className={styles.h1}>ШВИДКИЙ ЗВ'ЯЗОК З НАМИ!
ЗАЛИШТЕ ЗАПИТ І МИ З ВАМИ ЗВ'ЯЖЕМОСЬ!</h1>
    </section>
      {/* <div className={styles.item}>
  <label htmlFor="category"></label>
  <select id="category" {...register('category', { required: true })}>
    <option className={styles.option1} value="">djbhjbhhjvbv</option>
    <option className={styles.option} value="Шукаю житло">jdgnsknfjk</option>
    <option className={styles.option} value="Потрібна їжа">fjsdksdnfj</option>
    <option className={styles.option} value="Потрібно оформити документи">slkmfksdkl</option>
    <option className={styles.option} value="Потрібен психолог">dsmkfkms</option>
    <option className={styles.option} value="Шукаю школу для дітей">dklmsfkld</option>
  </select>
  {errors.category && <span style={{color:"red"}}>snajdshb</span>}
</div> */}
      <div className={styles.item}>
        <label htmlFor="name"></label>
        <input placeholder=" прізвище ім'я" type="text" id="name" {...register('name', { required: true })} />
        {errors.name && <span style={{color:"red"}} >sdajbahab</span>}
      </div>
      <div className={styles.item}>
        <label htmlFor="email"></label>
        <input placeholder=" електронна адреса" type="email" id="email" {...register('email', { required: true })} />
        {errors.email && <span style={{color:"red"}} >dsanjnakj</span>}
      </div>
      <div className={styles.item}>
        <label htmlFor="phone"></label>
        <input placeholder=" номер телефону"  type="phone" id="phone" {...register('phone', { required: true })} />
        {errors.phone && <span style={{color:"red"}} >jadjkssjn</span>}
      </div>
      <div className={styles.item}>
      <textarea placeholder=" напишіть нам" rows="4" cols="50">
          
          </textarea>
      </div>
      <button type="submit">Надіслати</button>
    </form>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d158.6452961929309!2d30.48038625836912!3d50.49091359729203!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1678866279717!5m2!1sru!2sua" width={1460}  height={200} ></iframe>
    </div>
    </>
  );
}

export default Contacts;