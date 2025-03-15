import "./../styles/parallax.css";

const ParallaxSection = ({ id, image, children }) => {
  return (
    <section id={id} className="parallax" style={{ backgroundImage: `url(${image})` }}>
      <div className="content">{children}</div>
    </section>
  );
};

export default ParallaxSection;
