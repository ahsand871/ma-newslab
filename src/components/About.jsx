import React, { Component } from 'react'

export class About extends Component {
  render() {
    return (
      <>
        <div
          style={{
            background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
            padding: '0',
            marginTop: '-20px',
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              maxWidth: "900px",
              background: "rgba(255,255,255,0.05)",
              padding: "0 40px",
              borderRadius: "12px",
              backdropFilter: "blur(10px)",
              boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
            }}
          >
            <h1 className='h3 my-3 mb-10 d-flex justify-content-center sticky-top' style={{ color: "#00e5ff" }}>
              About Us
            </h1>

            <p style={{ lineHeight: "1.8", fontSize: "16px" }}>
              MA NewsLab (Muhammad Ahsan's NewsLab) is a modern React-based web application designed to
              deliver real-time news updates from trusted sources around the
              world. The goal of this platform is to provide users with fast,
              reliable, and cleanly presented news content.
            </p>

            <p
              style={{ lineHeight: "1.8", fontSize: "16px", marginTop: "15px" }}
            >
              This application is built using React, React Router, and modern
              JavaScript concepts. It demonstrates features like API
              integration, infinite scrolling, dynamic routing, and responsive
              UI design.
            </p>

            <p
              style={{ lineHeight: "1.8", fontSize: "16px", marginTop: "15px" }}
            >
              Our mission is to make information accessible, minimal, and easy
              to browse. With smooth navigation and an intuitive interface,
              users can stay updated effortlessly.
            </p>

            <div style={{ marginTop: "30px" }}>
              <h3 style={{ color: "#00e5ff" }}>Technologies Used:</h3>
              <ul style={{ marginTop: "10px", lineHeight: "1.8" }}>
                <li>React JS</li>
                <li>React Router</li>
                <li>News API</li>
                <li>JavaScript (ES6+)</li>
                <li>CSS & Modern UI Styling</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About