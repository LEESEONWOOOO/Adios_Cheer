import logo from './logo.svg';
import './App.css';
import QRScanner from './QRScanner';
import QRCode from './QRCode';
import Attendance from './Attendance';
import { useState } from 'react';
import GoogleComponent from './GoogleComponent';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginInfo, setLoginInfo] = useState("");

  const handleLogin = (user) => {
    setLoginInfo(user)
    setIsLoggedIn(true);
  };


  // 현재 보여지는 화면을 state로 관리
  const [view, setView] = useState('login');

  // view 상태에 따라 로그인 화면이나 회원가입 화면을 렌더링
  const renderView = () => {
    return <div>
      <GoogleComponent handleLogin={handleLogin}/>
    </div>;
  }

  return (
    <div className="App">
      {/*<header className="App-header">
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
  */}
      {isLoggedIn ? (
        <>
          {/*<QRCode />*/}
          <Attendance setIsLoggedIn={setIsLoggedIn} loginInfo={loginInfo}/>
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
