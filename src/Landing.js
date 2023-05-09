import React from "react";
import propic from "../src/propic.png";
import emoji from "../src/Emoji.png";

const Navigation = () => {
  return (
    <div className="navbar">
      <ul className=".hover-underline-animation">
        <li>About Me</li>
        <li>Skills</li>
        <li>Project</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

const Landing = () => {
  return (
    <div className="container">
      <Navigation />
      <div className="flex">
        <div className="myInfo">
          <h1 className="heading">
            Hi <img src={emoji} alt="emoji" width="10%" />, <br />
            I'm Davidson, <br />
            Front-end Developer{" "}
          </h1>
          <p className="para">
            I design and develop experiences that make people’s lives simpler
            through Web and Mobile apps.I work with FIgma , HTML5, CSS3,
            JavaScript, React, ReactNative and Flutter.{" "}
          </p>
          <div className="buttonCover">
            <button
              className=" button-4"
              style={{
                color: "black",
              }}
            >
              HIRE ME
            </button>
            <button
              className=" button-5"
              style={{
                marginLeft: "38px",
                border: "none",
              }}
            >
              SEE MY PROJECTS
            </button>
          </div>
        </div>
        <div className="myPic">
          <div>
            <img src={propic} alt="profilePic" width="85%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
