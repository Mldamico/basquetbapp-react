import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from '../../api/axios'

interface MyData {
  access_token: string
}

type KnowError = string

interface PlayerAttributes {
  email: string
  fullName: string
  password: string
}
export const registerPlayer = createAsyncThunk(
  // action type string
  'player/registerPlayer',
  (player: PlayerAttributes, thunkApi) => {
    const { fullName, email, password } = player
    return axios.post('/auth/signup', { fullName, email, password }).then(response => {
      console.log(response)

      return response.data
    })
      .catch(e => {
        console.log(e)
        return thunkApi.rejectWithValue("Error")
      })
  }

)