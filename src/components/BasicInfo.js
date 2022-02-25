import React from "react";
import "../componentsStyles/basicInfoStyle.css";
export default function BasicInfo() {
  return (
    <div className="intro">
      <div className="imgDiv">
        <img
          src="https://i.pinimg.com/236x/24/20/b1/2420b12180f7aec7cd73b187072f2a82.jpg"
          alt="Amna Azam"
        />
      </div>
      <h1 className="name">Amna Azam</h1>
      <p>Frontend Developer</p>
      <p className="website">
        <a href="https://www.linkedin.com/in/amna-azam-5972b8217/">
          amnaazam.com
        </a>
      </p>
      <div className="buttons">
        <button>
          <a href="mailto:amnaazam1042@gmail.com">Email</a>
        </button>
        <button>
          <a href="https://www.linkedin.com/in/amna-azam-5972b8217/">
            LinkedIn
          </a>
        </button>
      </div>
    </div>
  );
}
