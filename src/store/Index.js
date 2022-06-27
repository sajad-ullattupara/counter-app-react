import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Count'

export const store = configureStore({
  reducer: {
      counter: counterReducer
  },
})

export default store