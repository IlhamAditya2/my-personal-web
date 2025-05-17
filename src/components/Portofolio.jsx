import React, { useEffect, useState } from "react";
import axios from "axios";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    // Ambil data portofolio dari API
    axios
      .get("http://localhost:8000/api/portfolio")
      .then((res) => {
        setPortfolio(res.data); // Update dengan data terbaru
      })
      .catch((err) => console.error("Error fetching portfolio: ", err));
  }, []); // Ambil data hanya sekali saat pertama kali halaman dimuat

return (
    <div className="main-container">
        <div className="container-porto fade-down">
            <a className="a1">Past Project Experience</a>
            <a className="a2">Explore the project I've worked on so far</a>
        </div>

        <div className="container-portofolio">
            <div className="portofolio-grid fade-in-center">
                <div className="porto-item">
                    <img src="/item-porto.png"/>
                    <h3>Personal Website</h3>
                    <p>My Personal Website, I created this website to display my profile, skills and projects, As well as my place to try new technology.</p>
                    <h4>ReactJS</h4>
                </div>
                <div className="porto-item">
                    <img src="/item-porto.png"/>
                    <h3>Personal Website</h3>
                    <p>My Personal Website, I created this website to display my profile, skills and projects, As well as my place to try new technology.</p>
                    <h4>ReactJS</h4>
                </div>
                <div className="porto-item">
                    <img src="/item-porto.png"/>
                    <h3>Personal Website</h3>
                    <p>My Personal Website, I created this website to display my profile, skills and projects, As well as my place to try new technology.</p>
                    <h4>ReactJS</h4>
                </div> 
            </div> 

            <div className="container-sertifikat fade-down">
            <a className="a1">Achievements & Certifications</a>
            <a className="a2">Explore the certifications and achievements that define my journey</a>
            </div>

            <div className="portofolio-grid fade-in-center">
                
                <div className="porto-item">
                    <img src="serti.jpg"/>
                    <h3>Cisco Networking Academy</h3>
                    <p>Learned how to identify threats, secure networks, and understand the fundamentals of online safety and digital ethics.</p>
                    <h4>XSS, DDoS, SQLI, DLL </h4>
                </div>

                <div className="porto-item">
                    <img src="serti.jpg"/>
                    <h3>Cisco Networking Academy</h3>
                    <p>Learned how to identify threats, secure networks, and understand the fundamentals of online safety and digital ethics.</p>
                    <h4>XSS, DDoS, SQLI, DLL </h4>
                </div>


            </div>
        </div>
    </div>
);
};

export default Portfolio;
