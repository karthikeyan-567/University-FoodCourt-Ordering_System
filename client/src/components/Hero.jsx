import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>It's not just Food, It's an Experience.</h1>
        <div className="hero-buttons">
          <button className="viewMenu">View Menu</button>
          <button className="order ur food">order ur food</button>
        </div>
      </div>
      <img src="/images/salad.png" alt="Salad" className="hero-image" />
    </section>
  );
};

export default Hero;
