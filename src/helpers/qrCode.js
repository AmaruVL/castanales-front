import QRCode from 'qrcode';

export const generateQR = (link) => {
  let qrString;
  QRCode.toString(
    link,
    {
      errorCorrectionLevel: 'H',
      type: 'svg',
    },
    (err, data) => {
      if (err) throw err;
      qrString = data;
    },
  );
  // Convertir de string a svg
  const blob = new Blob([qrString], { type: 'image/svg+xml' });
  const qrCode = URL.createObjectURL(blob);
  return qrCode;
};
