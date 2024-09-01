import React from 'react';
import styles from './Counter.module.css';

const Counter = ({ value, onChange, className }) => {
    const increment = () => onChange(value + 1);
    const decrement = () => {
      if (value > 1) onChange(value - 1);
    }

    return (
      <div className={`${styles.counter} ${(className)}`}>
        {(value === 1)
          ? <button style={{color: 'rgba(163, 163, 163, 1)'}} className={styles.button} onClick={decrement}>-</button>
          : <button className={styles.button} onClick={decrement}>-</button>}
        <p className={styles.number}>{value}</p>
        <button className={styles.button} onClick={() => increment()}>+</button>
      </div>
    )
}

export default Counter


