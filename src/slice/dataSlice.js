import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 3,
}

export const dataSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    category: (state) => {
        
    },
  },
})
export const { increment } = dataSlice.actions

export default dataSlice.reducer