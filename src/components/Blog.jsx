import React, { useEffect, useRef, useState } from "react";
import emailjs from 'emailjs-com';
// const [filter, setFilter] = useState("All");

const blogData = [
    {
      id: 1,
      topic: "NodeJS",
      date: "Mei 05 2027",
      title: "Belajar NodeJS",
      description: "Panduan belajar NodeJS dari awal...",
      image: "item-porto.png"
    },
    {
      id: 2,
      topic: "NodeJS",
      date: "Mei 05 2027",
      title: "Belajar NodeJS",
      description: "Panduan belajar NodeJS dari awal...",
      image: "item-porto.png"
    },
    {
      id: 3,
      topic: "NodeJS",
      date: "Mei 05 2027",
      title: "Belajar NodeJS",
      description: "Panduan belajar NodeJS dari awal...",
      image: "item-porto.png"
    },
    {
      id: 4,
      topic: "NodeJS",
      date: "Mei 05 2027",
      title: "Belajar NodeJS",
      description: "Panduan belajar NodeJS dari awal...",
      image: "item-porto.png"
    },
    {
      id: 5,
      topic: "NodeJS",
      date: "Mei 05 2027",
      title: "Belajar NodeJS",
      description: "Panduan belajar NodeJS dari awal...",
      image: "item-porto.png"
    },
    
    {
      id: 11,
      topic: "Technology",
      date: "Mei 06 2027",
      title: "Teknologi Masa Depan",
      description: "Teknologi yang akan booming...",
      image: "item-porto.png"
    },
    {
      id: 12,
      topic: "Technology",
      date: "Mei 06 2027",
      title: "Teknologi Masa Depan",
      description: "Teknologi yang akan booming...",
      image: "item-porto.png"
    },
    {
      id: 13,
      topic: "Technology",
      date: "Mei 06 2027",
      title: "Teknologi Masa Depan",
      description: "Teknologi yang akan booming...",
      image: "item-porto.png"
    },
    {
      id: 14,
      topic: "Technology",
      date: "Mei 06 2027",
      title: "Teknologi Masa Depan",
      description: "Teknologi yang akan booming...",
      image: "item-porto.png"
    },
    {
      id: 15,
      topic: "Technology",
      date: "Mei 06 2027",
      title: "Teknologi Masa Depan",
      description: "Teknologi yang akan booming...",
      image: "item-porto.png"
    },
    {
      id: 16,
      topic: "Technology",
      date: "Mei 06 2027",
      title: "Teknologi Masa Depan",
      description: "Teknologi yang akan booming...",
      image: "item-porto.png"
    },
    {
      id: 17,
      topic: "Technology",
      date: "Mei 06 2027",
      title: "Teknologi Masa Depan",
      description: "Teknologi yang akan booming...",
      image: "item-porto.png"
    },
    {
      id: 18,
      topic: "Technology",
      date: "Mei 06 2027",
      title: "Teknologi Masa Depan",
      description: "Teknologi yang akan booming...",
      image: "item-porto.png"
    },
    {
      id: 19,
      topic: "Technology",
      date: "Mei 06 2027",
      title: "Teknologi Masa Depan",
      description: "Teknologi yang akan booming...",
      image: "item-porto.png"
    },
    {
      id: 20,
      topic: "Technology",
      date: "Mei 06 2027",
      title: "Teknologi Masa Depan",
      description: "Teknologi yang akan booming...",
      image: "item-porto.png"
    },
    {
      id: 21,
      topic: "Technology",
      date: "Mei 06 2027",
      title: "Teknologi Masa Depan",
      description: "Teknologi yang akan booming...",
      image: "item-porto.png"
    },
    {
      id: 22,
      topic: "Technology",
      date: "Mei 06 2027",
      title: "Teknologi Masa Depan",
      description: "Teknologi yang akan booming...",
      image: "item-porto.png"
    },
    {
      id: 23,
      topic: "Technology",
      date: "Mei 06 2027",
      title: "Teknologi Masa Depan",
      description: "Teknologi yang akan booming...",
      image: "item-porto.png"
    },
    {
      id: 24,
      topic: "Technology",
      date: "Mei 06 2027",
      title: "Teknologi Masa Depan",
      description: "Teknologi yang akan booming...",
      image: "item-porto.png"
    },
    
    // Tambah data lainnya
  ];
  
  function Blog() {
    const form = useRef();
    const [selectedTopic, setSelectedTopic] = useState("All");
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(
        'service_ome0aq7',
        'template_sf3doae',
        form.current,
        'ttovEmiUzM-OefJen'
      ).then((result) => {
        alert("Pesan Terkirim");
      }, (error) => {
        alert('Pesan Gagal Terkirim: ' + error.text);
      });
    };
  
    const filteredBlogs = selectedTopic === "All" 
    ? blogData 
    : blogData.filter(blog => blog.topic === selectedTopic);


    return (
        <div>

        
        <div className="main-container-blog">
            <div className="blog-layout">
                <div className="blog-content">
                    {filteredBlogs.map(blog => ( 

                    <div className="blog-column" key={blog.id} >
                        <div className="blog-text">
                            <a className="tanggal">{blog.date}</a>
                            <a 
                            className="judul"
                            style={ { color: blog.topic === "NodeJS" ? "#00bfff" : "orange"}}
                            >
                                {blog.title}
                            </a>
                            <a className="deskripsi">{blog.description}</a>
                        </div>
                        <div className="blog-image">
                            <img src={blog.image} alt={blog.title} />
                        </div>
                    </div>
                     ))}
                    {/* <div className="blog-column">
                        <div className="blog-text">
                            <a className="tanggal">Mei 05 2027</a>
                            <a className="judul">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta labore error quasi </a>
                            <a className="deskripsi">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, beatae. Maiores maxime impedit, praesentium laborum similique ullam sed rem itaque ratione. Tempora cumque reprehenderit sunt aperiam id quae rem enim!</a>
                        </div>
                        <div className="blog-image">
                            <img src="item-porto.png"/>
                        </div>
                    </div>
                    <div className="blog-column">
                        <div className="blog-text">
                            <a className="tanggal">Mei 05 2027</a>
                            <a className="judul">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta labore error quasi </a>
                            <a className="deskripsi">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, beatae. Maiores maxime impedit, praesentium laborum similique ullam sed rem itaque ratione. Tempora cumque reprehenderit sunt aperiam id quae rem enim!</a>
                        </div>
                        <div className="blog-image">
                            <img src="item-porto.png"/>
                        </div>
                    </div>
                    <div className="blog-column">
                        <div className="blog-text">
                            <a className="tanggal">Mei 05 2027</a>
                            <a className="judul">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta labore error quasi </a>
                            <a className="deskripsi">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, beatae. Maiores maxime impedit, praesentium laborum similique ullam sed rem itaque ratione. Tempora cumque reprehenderit sunt aperiam id quae rem enim!</a>
                        </div>
                        <div className="blog-image">
                            <img src="item-porto.png"/>
                        </div>
                    </div>
                    <div className="blog-column">
                        <div className="blog-text">
                            <a className="tanggal">Mei 05 2027</a>
                            <a className="judul">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta labore error quasi </a>
                            <a className="deskripsi">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, beatae. Maiores maxime impedit, praesentium laborum similique ullam sed rem itaque ratione. Tempora cumque reprehenderit sunt aperiam id quae rem enim!</a>
                        </div>
                        <div className="blog-image">
                            <img src="item-porto.png"/>
                        </div>
                    </div>
                    <div className="blog-column">
                        <div className="blog-text">
                            <a className="tanggal">Mei 05 2027</a>
                            <a className="judul">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta labore error quasi </a>
                            <a className="deskripsi">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, beatae. Maiores maxime impedit, praesentium laborum similique ullam sed rem itaque ratione. Tempora cumque reprehenderit sunt aperiam id quae rem enim!</a>
                        </div>
                        <div className="blog-image">
                            <img src="item-porto.png"/>
                        </div>
                    </div>
                    <div className="blog-column">
                        <div className="blog-text">
                            <a className="tanggal">Mei 05 2027</a>
                            <a className="judul">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta labore error quasi </a>
                            <a className="deskripsi">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, beatae. Maiores maxime impedit, praesentium laborum similique ullam sed rem itaque ratione. Tempora cumque reprehenderit sunt aperiam id quae rem enim!</a>
                        </div>
                        <div className="blog-image">
                            <img src="item-porto.png"/>
                        </div>
                    </div>
                    <div className="blog-column">
                        <div className="blog-text">
                            <a className="tanggal">Mei 05 2027</a>
                            <a className="judul">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta labore error quasi </a>
                            <a className="deskripsi">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, beatae. Maiores maxime impedit, praesentium laborum similique ullam sed rem itaque ratione. Tempora cumque reprehenderit sunt aperiam id quae rem enim!</a>
                        </div>
                        <div className="blog-image">
                            <img src="item-porto.png"/>
                        </div>
                    </div>
                    <div className="blog-column">
                        <div className="blog-text">
                            <a className="tanggal">Mei 05 2027</a>
                            <a className="judul">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta labore error quasi </a>
                            <a className="deskripsi">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, beatae. Maiores maxime impedit, praesentium laborum similique ullam sed rem itaque ratione. Tempora cumque reprehenderit sunt aperiam id quae rem enim!</a>
                        </div>
                        <div className="blog-image">
                            <img src="item-porto.png"/>
                        </div>
                    </div> */}
                  
                </div>
               

                <div className="blog-sidebar">
                    <h2>Let's share experiences, stories, and knowledge together.</h2>
                    <div className="line-skill"></div>
                    <p>Topics</p>
                    {/* <a class="sidebar-button" onclick="filterBlogs('NodeJS')">NodeJS</a>
                    <a class="sidebar-button" onclick="filterBlogs('Technology')">Technology</a>
                    <a class="sidebar-button" onclick="filterBlogs('All')">Show All</a> */}

                    <a className="sidebar-button" onClick={() => setSelectedTopic("NodeJS")}>NodeJS</a>
                    <a className="sidebar-button" onClick={() => setSelectedTopic("Technology")}>Technology</a>
                    <a className="sidebar-button" onClick={() => setSelectedTopic("All")}>Show All</a>
                </div>

            </div>





                <div className="about-line-blog fade-down"></div>
            <div className="contact-form">
                <a className="H">Contact Me</a>
                <form ref={ form } onSubmit={sendEmail}>
                    <input type="text" placeholder="Nama" required className="input"/>
                    <input type="email" placeholder="Email" required className="input"/>
                    <textarea name="message" placeholder="Pesan" required className="input" rows={5}></textarea>
                    <button type="submit" className="button-sumbit">kirim</button>
                </form>
            </div>

        </div>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-content">
                        <div className="footer-item">
                            <h3>Link</h3>
                            <a href="/">Home</a>
                            <a href="/About">About</a>
                            <a href="/Portofolio">Portofolio</a>
                            <a href="/Blog">Blog</a>
                        </div>
                        <div className="footer-item">
                            <h3>Account</h3>
                            <a>Account</a>
                            <a>My tasks</a>
                            <a>Projects</a>
                            <a>Invite friends</a>
                        </div>
                        
                    </div>
                    <div className="footer-content">
                        <div className="footer-item">
                            <h3>Contacts</h3>
                            <a>+1(062)109-9222</a>
                            <a>support@ilham.engineer</a>
                            <a>153 Ring Road, Magelang, MT 09989 Merapi</a>
                        </div>
                        <div className="footer-item">
                            <h3>Subscribe</h3>
                            <div className="email-box">
                                <input type="email" id="email" placeholder="Your email"></input>
                                <button type="submit" className="email-button"> s </button>
                            </div>

                            <div className="social-media">
                                <p>Stay in touch</p>
                                <div className="social-icons">
                                    <a href="https://www.tiktok.com/@.pilottttt" ><i className="fab fa-tiktok"></i></a>
                                    <a href="https://www.linkedin.com/in/ilham-aditya-0a78a7312" ><i className="fab fa-linkedin"></i></a>
                                    <a href="https://instagram.com/ilhmadty__" ><i className="fab fa-instagram"></i></a>
                                    <a href="https://github.com/IlhamAditya2" ><i className="fab fa-github"></i></a>

                                </div>

                            </div>
                        </div>
                    </div>

                    
                </div>
            </footer>
            <div className="footer-bottom">
            <div className="about-line-blog fade-down"></div>
                <p>&copy; 2025 Personal Website. All rights reserved.</p>
            </div>


        </div>
        
    );
}

export default Blog;
{/* <nav className="footer-nav">
    <a>Home</a>
    <a>About</a>
    <a>Portofolio</a>
    <a>Blog</a>
</nav> */}