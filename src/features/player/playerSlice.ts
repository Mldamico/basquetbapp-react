import { PayloadAction } from './../../../node_modules/@reduxjs/toolkit/src/createAction';
import { createSlice } from '@reduxjs/toolkit'
import { registerPlayer } from './playerAction'

interface IProps {
  loading: boolean
  player: any
  userToken?: string | null
  error: string | null
}

const initialState: IProps = {
  loading: false,
  player: {},
  userToken: null,
  error: null,
}

type Player = {
  access_token: string
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(registerPlayer.pending, state => {
      state.loading = true
    })
    builder.addCase(registerPlayer.fulfilled, (state, action: PayloadAction<Player>) => {
      state.loading = false
      state.userToken = action.payload.access_token
      state.error = ''
    })
    builder.addCase(registerPlayer.rejected, (state) => {
      state.loading = false
      state.userToken = ""
      state.error = "Something went wrong"
    })
  }
})

export default playerSlice.reducer