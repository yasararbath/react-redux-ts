import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  numOfBikes: number
}
const initialState: InitialState = {
  numOfBikes: 20
}

const Bikeslice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    ordered: state => {
      state.numOfBikes--
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfBikes += action.payload
    }
  }
})

export default Bikeslice.reducer
export const { ordered, restocked } = Bikeslice.actions