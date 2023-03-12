import React from 'react';

function QRCode(props) {
  const qrCodeSize = 256;
  const qrCodeBackgroundColor = "#FFFFFF";
  const qrCodeForegroundColor = "#000000";
  const qrCodeErrorCorrectionLevel = "L";

  const qrCodeUrl = encodeURIComponent(props.url);
  const qrCodeData = `https://chart.googleapis.com/chart?chs=${qrCodeSize}x${qrCodeSize}&chld=${qrCodeErrorCorrectionLevel}|0&cht=qr&chl=${qrCodeUrl}&choe=UTF-8&chf=bg,s,${qrCodeBackgroundColor}|qr,${qrCodeForegroundColor}`;
  
  return (
      <img src={qrCodeData} alt="QR Code" />
  );
}

export default QRCode;
