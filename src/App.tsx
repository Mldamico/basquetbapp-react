/** @jsxImportSource @emotion/react */

import { useEffect } from 'react';
import './App.css';
import { registerPlayer } from './features/player/playerAction';
import { useAppDispatch } from './hooks/useDispatch';
import Signup from './screens/auth/signup/Signup';

// const usuario = { email: "probandoas2@gmail.com", fullName: "Pruebas", password: "123456" }

function App() {
  const dispatch = useAppDispatch()
  // useEffect(() => {
  //   dispatch(registerPlayer(usuario))
  // }, [])
  return (
    <Signup />
  );
}

export default App;
