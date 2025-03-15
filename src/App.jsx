import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Events from './pages/Events';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/communities" element={
              <div className="about-page">
                <h1>Communities</h1>
                <p>Connect with faith communities in your area. This page is under development.</p>
              </div>
            } />
            <Route path="/leaders" element={
              <div className="about-page">
                <h1>For Leaders</h1>
                <p>Resources for community and religious leaders. This page is coming soon.</p>
              </div>
            } />
            <Route path="/about" element={
              <div className="about-page">
                <h1>Support</h1>
                <p>Need help? Our support team is ready to assist you with any questions or concerns.</p>
              </div>
            } />
            {/* Catch-all route for undefined routes */}
            <Route path="*" element={
              <div className="about-page">
                <h1>Page Not Found</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
                <a href="/" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', background: 'var(--primary-color)', color: 'white', borderRadius: '5px', textDecoration: 'none' }}>
                  Return to Home
                </a>
              </div>
            } />
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Communion. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
