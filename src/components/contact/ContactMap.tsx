const mapContainerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '0.75rem',
};

export const ContactMap = () => {
  return (
    <div className="glass-card rounded-xl border-dark-secondary/30 overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed/v1/place?q=Frauenfelderstrasse+39,+8370+Sirnach,+Schweiz&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&maptype=roadmap&style=feature:all|element:geometry|color:0x242f3e&style=feature:all|element:labels.text.stroke|color:0x242f3e&style=feature:all|element:labels.text.fill|color:0x746855"
        style={mapContainerStyle}
        frameBorder="0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};