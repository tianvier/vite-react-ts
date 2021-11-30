import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '@/hooks/useStore';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from '@/store/reducers/counterSlice';

import styles from '@/assets/css/counter.module.css';
import { useNavigate } from 'react-router';

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>
      <div className="flex justify-center text-blue-600">
        <button onClick={() => navigate('/')}>Home</button>
      </div>
    </div>
  );
}
