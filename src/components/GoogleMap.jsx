export const GoogleMap = ({ latitude, longitude, zoom = 16, className="" }) => {
  const apiURL = `https://maps.google.com/maps?q=${latitude},${longitude}&z=${zoom}&output=embed`;
  return (
    <div className={className}>
      <iframe
        src={apiURL}
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
};
