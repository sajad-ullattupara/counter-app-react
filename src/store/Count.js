// count.slice.jsx
import { createSlice } from '@reduxjs/toolkit'

const initialState = { count: 0 }

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addOne: state => {state.count += 1},
    subOne: state => {state.count -= 1},
    addTen: (state, action) => {state.count += action.payload},
    subTen: (state, action) => {state.count -= action.payload},
    reset: state => {state.count = 0}
  },
})

export const { addOne, subOne, addTen, subTen, reset } = counterSlice.actions

export default counterSlice.reducer