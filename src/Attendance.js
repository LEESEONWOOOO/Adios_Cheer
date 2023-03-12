import React, { useState } from 'react';
import QRScanner from './QRScanner';
import { googleLogout } from '@react-oauth/google';


function Attendance(props) {
  const [attendanceList, setAttendanceList] = useState([]);

  const handleScan = (data) => {
    const timestamp = new Date().toLocaleString();
    const attendanceData = { timestamp, data };
    setAttendanceList([...attendanceList, attendanceData]);
  };

  const handleLogout = () => {
    props.setIsLoggedIn(false);
    localStorage.removeItem('token')
    googleLogout();
  }

  return (
    <div>
      <ul>
      <li><span>{props.loginInfo}</span></li>
      <li><QRScanner onScan={handleScan}/></li>
      <li><button onClick={handleLogout}>Logout</button></li>
      </ul>
      
      <ul>
        {attendanceList.map((attendance) => (
          <li key={attendance.timestamp}>
            {attendance.timestamp}: {attendance.data}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Attendance;
