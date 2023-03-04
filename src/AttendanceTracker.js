import { useState } from 'react';
import QRScanner from './QRScanner';

function AttendanceTracker({ userId, onLogout }) {
  const [attendanceList, setAttendanceList] = useState([]);

  const handleScan = (data) => {
    const timestamp = new Date().toLocaleString();
    const attendanceData = { timestamp, data };
    setAttendanceList([...attendanceList, attendanceData]);
  };

  return (
    <div>
      <h2>Attendance Tracker - {userId}</h2>
      <button onClick={onLogout}>Logout</button>
      <QRScanner onScan={handleScan} />
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

export default AttendanceTracker;
