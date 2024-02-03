import React from 'react';
import './App.css';
import profilePicture from './profile.jpg';
import resumePDF from './your-resume.pdf'; // Replace with your actual PDF file

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProfileCard />
      </header>
    </div>
  );
}

function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="card-header">
        <img src={profilePicture} alt="Profile" className="profile-picture" />
        <h1>Victor Prieto</h1>
        <p>Programmer</p>
      </div>
      <div className="card-body">
        <h2>About Me</h2>
        <p>
          Welcome to my personal website! I am a programmer with a passion for web design,
          mathematics, and programming. I aim to be well versed in a variety of computational skills such as:
          game design, software development, data analysis, machine learning, and more.
          My main languages are Python and C++, but I also have experience working with JavaScript and Assembly Language.
        </p>
      </div>
      <div className="card-footer">
        <h2>Connect with Me</h2>
        <div className="social-links">
          <a href="https://github.com/vp1-2-3" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/victor-prieto-378140194" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={resumePDF} target="_blank" rel="noopener noreferrer">
            Resume (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
