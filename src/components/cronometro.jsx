import React, { useState } from 'react'
import styles from '../assets/css/cronometro.module.css'
  
  
const Cronometro = () => {
  
    // The state for our timer
    const [days, setDays] = useState('00');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');


    setInterval(() =>{
        const diaInicio = new Date().getTime();
        const diaFinal = new Date('dec 25, 2023 00:00:00').getTime();
        const distance = diaFinal - diaInicio;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours =  '0' + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
        const minutes = '0' + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = '0' + Math.floor((distance % (1000 * 60)) / (1000))

        const horas = hours.slice(-2)
        const minutos = minutes.slice(-2)
        const segundos = seconds.slice(-2)
        setDays(days);
        setHours(horas);
        setMinutes(minutos)
        setSeconds(segundos)
    }, 10)
  
  
    
  
    return (
        <div className="flex flex-column flex-center">

            <div className='width-100% text-center'>
                <p className='text-uppercase text'>save the date</p>
                <p className='title text-xxl'>9 de octubre</p>
            </div>

            <div className={styles.cronometro}>
                <div className={styles.contador}>
                    <p className='count-value'>{ days }</p>
                    <p className='count-text'>Día(s)</p></div>
                <div className='count-text count-point'>:</div>
                <div className={styles.contador}>
                <p className='count-value'>{ hours }</p>
                    <p className='count-text'>Hora(s)</p>
                </div>
                <div className='count-text count-point'>:</div>
                <div className={styles.contador}>
                <p className='count-value'>{ minutes }</p>
                    <p className='count-text'>Minuto(s)</p>
                </div>
                <div className='count-text count-point'>:</div>
                <div className={styles.contador}>
                <p className='count-value'>{ seconds }</p>
                    <p className='count-text'>Segundo(s)</p>
                </div>
            </div>

            <div className='padding-top-md'>
                <button className='text-uppercase'>agendar fecha</button>
            </div>
        </div>
    )
}
  
export default Cronometro;