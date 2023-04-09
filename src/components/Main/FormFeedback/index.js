import styles from './FormFeedback.module.css';
import React from 'react';
import { useState,  } from 'react'; 
import { useForm } from 'react-hook-form';
import axios from 'axios';
function  FormFeedback({openForm}) {
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
    <div className={styles.wrapper} >
       
    <div className={styles.container}>
    <img src='/images/close.png' onClick={() => openForm()} />
    <section id='home'>
    <h1 className={styles.h1}>ШВИДКИЙ ЗВ'ЯЗОК З НАМИ!
ЗАЛИШТЕ ЗАПИТ І МИ З ВАМИ ЗВ'ЯЖЕМОСЬ!</h1>
    </section>
  
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.item}>
        <label htmlFor="name"></label>
        <input placeholder=" прізвище ім'я" type="text" id="name" {...register('name', { required: true })} />
        {errors.name && <span style={{color:"red"}} >sdajbahab</span>}
      </div>
      <div className={styles.item}>
        <label htmlFor="phone"></label>
        <input placeholder=" номер телефону"  type="phone" id="phone" {...register('phone', { required: true })} />
        {errors.phone && <span style={{color:"red"}} >jadjkssjn</span>}
      </div>
      <button type="submit">Надіслати</button>
    </form>
    </div>
   </div>
    )}
    export default FormFeedback;