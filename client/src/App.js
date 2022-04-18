import './App.scss';
import './normalize.scss';
import {BrowserRouter,Routes,Route,Link,Navigate} from "react-router-dom";
import { AuthPage } from './pages/AuthPage/AuthPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { UsersPage } from './pages/Users/UsersPage';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import { MainPage } from './pages/MainPage/MainPage';
import { Header } from './components/header/Header';

function App() {
  const {userIsAuthenticated} = useContext(AuthContext);
  console.log('App');
  return (
    <><div className="App">
      <AuthContext.Provider value={userIsAuthenticated}>
      <BrowserRouter>
      <Header></Header>
      <main className='main'>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="login" element={<AuthPage />} />
          <Route path="register" element={<RegisterPage />} />
          {/* <Route path="users" element={userIsAuthenticated ? <UsersPage /> : <Navigate to='/auth'/>} /> */}
          <Route path="users" element={<UsersPage />} />
        </Routes>
      </main> 
      </BrowserRouter>
      </AuthContext.Provider>
    </div></>
  );
}

export default App;
