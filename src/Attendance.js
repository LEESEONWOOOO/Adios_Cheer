import React, { useState } from 'react';
import QRScanner from './QRScanner';

function AttendanceTracker() {
  const [attendanceList, setAttendanceList] = useState([]);

  const handleScan = (data) => {
    const timestamp = new Date().toLocaleString();
    const attendanceData = { timestamp, data };
    setAttendanceList([...attendanceList, attendanceData]);
  };

  return (
    <div>
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
