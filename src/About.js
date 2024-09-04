import React from "react";
import "./App.css";
function About() {
  return (
    <section className="about">
      <div className="imgdiv">
        <img className="image" src="profile.jpeg" alt="Profile Image" />
      </div>
      <div className="content">
        {" "}
        <h2 style={{ color: "orchid" }}>About US</h2>
        <p>
          At Tiny Threads, we bring fun, comfort, and style to kids' fashion.
          Our carefully curated collection offers trendy yet comfortable
          clothing designed to make your little ones look their best while
          feeling great. From playful outfits to everyday essentials, Tiny
          Threads is your go-to destination for fashionable and affordable kids'
          wear.
        </p>
      </div>
    </section>
  );
}

export default About;
