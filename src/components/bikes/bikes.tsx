import { useAppSelector, useAppDispatch } from '../../app/hook'
import { ordered, restocked } from './bikeSlice';
import React, { useState } from 'react';

export const BikeView = () => {
  const [value, setValue] = useState(1)
  const numOfBikes = useAppSelector(state => state.bike.numOfBikes)
  const dispatch = useAppDispatch()
  return (
    <div>
      <h2>Number of Bikes - {numOfBikes}</h2>
      <button onClick={() => dispatch(ordered())}>Order Bike</button>
      <input
        type='number'
        value={value}
        onChange={e => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>Restock Bikes</button>
    </div>
  )
}