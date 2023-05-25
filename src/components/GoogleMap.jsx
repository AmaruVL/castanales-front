export const GoogleMap = ({ latitude, longitude, zoom = 16 }) => {
  const apiURL = `http://maps.google.com/maps?q=${latitude},${longitude}&z=${zoom}&output=embed`;
  return (
    <iframe
      src={apiURL}
      width="100%"
      height="100%"
      loading="lazy"
      allowFullScreen
    />
  );
};
