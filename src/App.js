import React from 'react';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <div id="wrapper">
        <header id="header" className="alt">
          <span className="logo">
            <img src="/src/assets/images/logo.png" alt="Logo" />
          </span>
          <h1>Cameron Vandermeersch</h1>
          <p>
            Hi! I&apos;m a passionate web developer showcasing advanced understanding of fundamental web technologies.
            <br />
            Built by <a href="https://github.com/camvandy" target="_blank" rel="noopener noreferrer">@camvandy</a>
          </p>
        </header>

        <nav id="nav">
          <ul>
            <li><a href="#intro" className="active">Introduction</a></li>
            <li><a href="#first">Experience</a></li>
            <li><a href="#second">Projects</a></li>
            <li><a href="#third">Skills</a></li>
          </ul>
        </nav>

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>About Me</h2>
                </header>
                <p>
                  Welcome to my portfolio! I&apos;m a passionate web developer with expertise in modern web technologies.
                  This site showcases my skills in React, JavaScript, and CSS.
                </p>
              </div>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Experience</h2>
            </header>
            <p>Details about my professional experience will go here.</p>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Projects</h2>
            </header>
            <p>Showcase of my projects will be displayed here.</p>
          </section>

          <section id="third" className="main special">
            <header className="major">
              <h2>Skills</h2>
            </header>
            <p>My technical skills and expertise areas will be listed here.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
