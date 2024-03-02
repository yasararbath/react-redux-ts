import React from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hook'
import { ordered, restocked } from './carSlice'

export const CarView = () => {
  const [value, setValue] = React.useState(1)
  const numOfCars = useAppSelector(state => state.car.numOfCars)
  const dispatch = useAppDispatch()
  return (
    <div>
      <h2>Number of Cars - {numOfCars}</h2>
      <button onClick={() => dispatch(ordered())}>Order Cars</button>
      <input
        type='number'
        value={value}
        onChange={e => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restock Cars
      </button>
    </div>
  )
}