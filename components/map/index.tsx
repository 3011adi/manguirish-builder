const Map = () => {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122631.04347814952!2d73.83870315820312!3d15.590731000000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfce9c8eafb2b1%3A0x3f2be6c7a3bf1b69!2sMapusa%2C%20Goa!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-xl"
        title="Mapusa, Goa Location"
      />
    </div>
  );
};

export default Map;