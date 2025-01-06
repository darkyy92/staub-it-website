const mapContainerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '0.75rem',
};

export const ContactMap = () => {
  return (
    <div className="glass-card rounded-xl border-dark-secondary/30 overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed/v1/place?q=Frauenfelderstrasse+39,+8370+Sirnach,+Schweiz&key=AIzaSyC9_3wIGBLT2Ipb11rQ9hKIgyCgAtKZ3AQ"
        style={mapContainerStyle}
        frameBorder="0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};