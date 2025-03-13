import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Connecting People Across Faiths & Interests</h1>
        <p className="hero-description">
          Bridging gaps between faiths with tech and a dash of fun! 
          Join us to build a world that's more inclusive, engaging, and connected than ever before.
        </p>
        <Link to="/events" className="cta-button">
          Explore Events
        </Link>
      </div>

      <div className="about-section">
        <h2>Unite, Connect, Innovate, Inspire Together</h2>
        <p>
          Join us to be part of a community where spirituality meets innovation. 
          Together, we'll build a world that's more inclusive, engaging, and connected than ever before!
        </p>
        <div className="features">
          <div className="feature">
            <h3>Find Events</h3>
            <p>Discover meaningful gatherings that align with your faith and interests</p>
          </div>
          <div className="feature">
            <h3>Build Community</h3>
            <p>Connect with like-minded individuals and build lasting relationships</p>
          </div>
          <div className="feature">
            <h3>Share Your Passions</h3>
            <p>Create and host events that inspire others and make a difference</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 