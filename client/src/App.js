import './App.css';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import { AuthPage } from './pages/AuthPage/AuthPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { UsersPage } from './pages/Users/UsersPage';

function App() {
console.log('App');
  return (
    <><div className="App"></div>
    <BrowserRouter>
      <Link to="/">Main</Link>|
      <Link to="auth">Login</Link>|
      <Link to="register">Register</Link>|
      <Link to="users">Users</Link>
      <Routes>
        <Route path="/" element={<h1>Main page</h1>} />
        <Route path="auth" element={<AuthPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="users" element={<UsersPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
