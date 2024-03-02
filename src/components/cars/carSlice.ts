import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ordered as cakeOrdered } from '../bikes/bikeSlice'

type InitialState = {
  numOfCars: number
}

const initialState: InitialState = {
  numOfCars: 10
}

const Carslice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    ordered: state => {
      state.numOfCars--
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfCars += action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(cakeOrdered, state => {
      state.numOfCars--
    })
  }
})

export default Carslice.reducer
export const { ordered, restocked } = Carslice.actions