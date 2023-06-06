import React, { useState } from 'react';
import './App.css';


const App = () => {
  const [currentSection, setCurrentSection] = useState('About Me');

  const handleNavigationClick = (section) => {
    setCurrentSection(section);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="App">
      <header>
        <h1>Evan Chan's Portfolio</h1>
        <nav>
          <ul>
            <li
              className={currentSection === 'About Me' ? 'active' : ''}
              onClick={() => handleNavigationClick('About Me')}
            >
              About Me
            </li>
            <li
              className={currentSection === 'Portfolio' ? 'active' : ''}
              onClick={() => handleNavigationClick('Portfolio')}
            >
              Portfolio
            </li>
            <li
              className={currentSection === 'Contact' ? 'active' : ''}
              onClick={() => handleNavigationClick('Contact')}
            >
              Contact
            </li>
            
            <li
              className={currentSection === 'Resume' ? 'active' : ''}
              onClick={() => handleNavigationClick('Resume')}
            >
              Resume
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {currentSection === 'About Me' && (
          <section>
            <h2>About Me</h2>
            <img src='./images/pfp2.jpg' alt="Avatar" className="avatar" />
            <p>My name is Evan Chan, I am 23 years old and I enjoy gaming, photography, and graphics design. Welcome to my coding portfolio!</p>
          </section>
        )}

        {currentSection === 'Portfolio' && (
          <section className="section-portfolio">
          <h2>Portfolio</h2>
          <div className="project">
            <div className="project-item">
              <div className="project-info">
                <h3>README Generator</h3>
                <p>A command line app that allows users to generate a README document with set prompts</p>
                
                <a href="https://github.com/chanevan13/README.md-Generator/tree/main/Develop" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
              </div>
            </div>
            <div className="project-item">
              <img src="./images/Weather Tracker.png" alt="Project 2" />
              <div className="project-info">
                <h3>Weather Tracker</h3>
                <p>An application that allows users to track weather in cities and stores recents searches</p>
                
                <a href="https://github.com/chanevan13/Weather-Tracker" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
              </div>
            </div>
            <div className="project-item">
              <div className="project-info">
                <h3>Note Taker</h3>
                <p>A note taking app that allows users to create or remove daily notes</p>
                
                <a href="https://github.com/chanevan13/Note-Taker#contact" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
              </div>
            </div>
          </div>
        </section>
        )}

      {currentSection === 'Contact' && (
          <section>
            <h2>Contact</h2>
            <form onSubmit={handleFormSubmit}>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <textarea placeholder="Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </section>
        )}

        {currentSection === 'Resume' && (
          <section>
            <h2>Resume</h2>
            <a href="resume.pdf" >Coming Soon</a>
            <ul>
              
            </ul>
          </section>
        )}
      </main>

      <footer>
        <p>
          Connect with me on:
          <a href="https://github.com/developer" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://chanevan13@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
        </p>
      </footer>
    </div>
  );
};

export default App;