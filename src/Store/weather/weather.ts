import { cityApi } from '@/Services/city'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface WeatherState {
  dogsData: string[]
  favoriteList: string[]
}

const initialState: WeatherState = {
  dogsData: [],
  favoriteList: [],
}

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setFavorite: (state, action: PayloadAction<string>) => {
      state.favoriteList = state.favoriteList.concat(action.payload)
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      cityApi.endpoints.getDogs.matchFulfilled,
      (state, { payload }) => {
        const { message } = payload
        state.dogsData = message
      },
    )
  },
})

export const { setFavorite } = weatherSlice.actions
const weatherReducer = weatherSlice.reducer
export default weatherReducer
