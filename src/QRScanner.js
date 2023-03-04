import React, { useState } from 'react';
import QrReader from 'react-qr-scanner';

function QRScanner(props) {
  const [qrData, setQrData] = useState('');

  const handleScan = (data) => {
    if (data) {
      setQrData(data);
      props.onScan(data); // 상위 컴포넌트로 데이터 전달
    }
  };

  return (
    <QrReader
      delay={300}
      onError={console.error}
      onScan={handleScan}
      style={{ width: '100%' }}
    />
  );
}

export default QRScanner;
