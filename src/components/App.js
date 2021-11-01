import {useContext} from "react";
import LoginForm from './LoginForm';
import TopBar from './TopBar';
import { cherry } from "../themes";
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import Loader from './Loader'

let activeTheme = cherry;

function App() {
  const {auth} = useContext(Context);
  const [user, loading, error] = useAuthState(auth);
  if(loading) return <Loader />
  return (
    <>
      <BrowserRouter>
        <TopBar theme = {activeTheme} />
        <AppRouter theme = {activeTheme} />
      </BrowserRouter>
    </>
  );
}

export default App;
