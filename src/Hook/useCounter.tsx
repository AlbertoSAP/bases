import React, { useState } from 'react'

export const useCounter = (initialValue:number) => {
 
    const [count, setCount] = useState<number>(initialValue);

    const acumular = (value: number) => setCount(count + value);
    const restar = (value: number) => {
      setCount(count - value);
    };

    return {
        count,
        acumular,
        restar
    }
}
