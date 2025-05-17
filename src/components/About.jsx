import React, { useState } from 'react';
import './Home.css'; // ganti dengan CSS kamu

function AboutAndSkills() {
  const [flipped, setFlipped] = useState(false);
  const [currentTab, setCurrentTab] = useState('tech'); // 'tech' atau 'tools'

  const flipRole = () => {
    setFlipped(prev => !prev);
  };

  const switchTab = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div className="main-container">
      <div className="container1">
        <div className="about-container">
          <h2 className="about-title fade-down">About Me</h2>
          <div className="about-line fade-down"></div>
        </div>
        <div className="intro-section1">
          <div className="about-image fade-in-up">

            <img src="sy1.png" alt="gambar" />
          </div>
          <div id='text-about' className="about-text fade-in-right">
            <p>Hi everyone! My name is Ilham Aditya Pratama I'm from Majalengka, West Java 🇮🇩, I am an informatics student, currently halfway through my degree. I am expanding my knowledge in both front-end and back-end development. In addition, I have started to explore the field of cybersecurity, with a focus on bug hunting, to better understand how security systems work and how to protect applications from potential vulnerabilities or attacks. I am passionate about learning new techniques, exploring weaknesses, and continuously sharpening my analytical skills in this area.</p>
          </div>
        </div>
      </div>

      <div className="skill-container">
        <div className="container-skill">
          <h2>Skills</h2>
          <div className="line-skill"></div>
        </div>

        <div className="skill-header">
          <div className="role-container" onClick={flipRole}>
            <div
              className="flipper"
              style={{
                transform: flipped ? 'translateX(-50%)' : 'translateX(0%)',
                transition: 'transform 0.3s ease',
              }}
            />
          </div>
        </div>

        <div className="skill-tab-container">
          <div className="tab-button">
            <button onClick={() => switchTab('tech')}>Tech</button>
            <button onClick={() => switchTab('tools')}>Tools</button>
          </div>

          {/* WEB WRAPPER */}
          {!flipped && (
            <div id="web-wrapper" className="role-wrapper">
              <div className="tab-content">
                <div id="web-tech" className={`tab-panel ${currentTab === 'tech' ? 'active' : ''}`}>
                  <div className="skill-grid">
                    <div className="skill-box"><i className="fab fa-html5"></i> HTML</div>
                    <div className="skill-box"><i className="fab fa-css3-alt"></i> CSS</div>
                    <div className="skill-box"><i className="fab fa-js"></i> JS</div>
                    <div className="skill-box"><i className="fab fa-php"></i> PHP</div>
                    <div className="skill-box"><i className="fab fa-laravel"></i> Laravel</div>
                    <div className="skill-box"><i className="fab fa-bootstrap"></i> Bootstrap</div>
                  </div>
                </div>

                <div id="web-tools" className={`tab-panel ${currentTab === 'tools' ? 'active' : ''}`}>
                  <div className="skill-grid">
                    <div className="skill-box"><i className="fas fa-code"></i> VSCode</div>
                    <div className="skill-box"><i className="fab fa-git-alt" style={{ color: '#F1502F' }}></i> Git</div>
                    <div className="skill-box"><i className="fab fa-github"></i> GitHub</div>
                    <div className="skill-box"><i className="fas fa-terminal"></i> Terminal</div>
                    <div className="skill-box"><i className="fas fa-server"></i> XAMPP</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CYBER WRAPPER */}
          {flipped && (
            <div id="cyber-wrapper" className="role-wrapper">
              <div id="cyber-tech" className={`tab-panel ${currentTab === 'tech' ? 'active' : ''}`}>
                <div className="skill-grid">
                  <div className="skill-box"><i className="fas fa-network-wired"></i> Nmap</div>
                  <div className="skill-box"><i className="fas fa-bug" style={{ color: '#ff6600' }}></i> Burp Suite</div>
                  <div className="skill-box"><i className="fas fa-shield-alt" style={{ color: '#0069A8' }}></i> Wireshark</div>
                  <div className="skill-box"><i className="fas fa-code-branch" style={{ color: '#444' }}></i> Recon-ng</div>
                  <div className="skill-box"><i className="fas fa-hammer" style={{ color: '#2980b9' }}></i> Metasploit</div>
                </div>
              </div>

              <div id="cyber-tools" className={`tab-panel ${currentTab === 'tools' ? 'active' : ''}`}>
                <div className="skill-grid">
                  <div className="skill-box"><i className="fab fa-linux"></i> Kali Linux</div>
                  <div className="skill-box"><i className="fas fa-bolt" style={{ color: '#19e6e6' }}></i> Parrot OS</div>
                  <div className="skill-box"><i className="fas fa-shield-virus" style={{ color: '#0091d0' }}></i> Nessus</div>
                  <div className="skill-box"><i className="fas fa-terminal"></i> Terminal</div>
                  <div className="skill-box"><i className="fas fa-globe" style={{ color: '#888' }}></i> Browser + Addon</div>
                </div>
              </div>
            </div>
          )};
        </div>
      </div>
    </div>
  );
};

export default AboutAndSkills;