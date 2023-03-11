import logo from './logo.svg';
import './App.css';
import QRScanner from './QRScanner';
import QRCode from './QRCode';
import Attendance from './Attendance';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { useState } from 'react';
import GoogleComponent from './GoogleComponent';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);

  const handleLogin = (i) => {
    /*
    const user = users.find(user => user.id === id && user.password === password);
    if (user) {
      setIsLoggedIn(true);
    } else {
      // 로그인 정보가 일치하지 않을 경우 회원가입 화면으로 이동
      setView('signup');
      alert('Invalid ID or password.');
    }*/
  };

  const handleSignup = (id, password) => {
    if (users.find(user => user.id === id)) {
      alert('ID already exists.');
    } else {
      setUsers([...users, { id, password }]);
      alert('Sign up successful!');
      // 회원가입 완료 후 로그인 화면으로 이동
      setView('login');
    }
  };

  // 현재 보여지는 화면을 state로 관리
  const [view, setView] = useState('login');

  // view 상태에 따라 로그인 화면이나 회원가입 화면을 렌더링
  const renderView = () => {
    switch (view) {
      case 'signup':
        return <SignupForm onSignup={handleSignup} />;
      default:
        return <LoginForm onLogin={handleLogin} />;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <GoogleComponent setIsLoggedIn={setIsLoggedIn} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {isLoggedIn ? (
        <>
          <QRScanner />
          <QRCode />
          <Attendance />
        </>
      ) : (
        <>
          {renderView()}
        </>
      )}
    </div>
  );
}

export default App;
