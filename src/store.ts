import { configureStore } from '@reduxjs/toolkit';
import playerSlice from './features/player/playerSlice';

const store = configureStore({
  reducer: {
    player: playerSlice
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store