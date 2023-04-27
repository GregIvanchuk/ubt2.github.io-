import styles from './FormFeedback.module.css';
import React from 'react';
import { useState,  } from 'react'; 
import { useForm } from 'react-hook-form';
import axios from 'axios';
function  FormFeedback({openForm}) {
    const { register, handleSubmit, reset , formState: { errors } } = useForm();
    const apiForm = process.env.REACT_APP_API_URL_FORM_ONE
  const onSubmit = (data) => {
    axios.post(apiForm, data)
    .then((response) => {
      if (response.status === 200) {
        alert('Form submitted successfully!');
        openForm()
      } else {
        throw new Error(response.statusText);
      }
    })
    .catch((error) => {
      console.error(error);
      alert('Form submission failed.');
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
        {errors.name && <span style={{color:"red"}} >всі поля мають бути заповнені</span>}
      </div>
      <div className={styles.item}>
        <label htmlFor="phone"></label>
        <input placeholder=" номер телефону"  type="phone" id="phone" {...register('phone', { required: true })} />
        {errors.phone && <span style={{color:"red"}} >всі поля мають бути заповнені</span>}
      </div>
      {/* <div className={styles.item}>
        <label htmlFor="email"></label>
        <input placeholder=" електронна адреса" type="email" id="email" {...register('email', { required: true })} />
        {errors.email && <span style={{color:"red"}} >всі поля мають бути заповнені</span>}
      </div> */}
      <button type="submit">Надіслати</button>
    </form>
    </div>
   </div>
    )}
    export default FormFeedback;