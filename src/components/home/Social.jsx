import React from "react";

function Social() {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/adeel-ahmad-429010373/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-linkedin"></i>
      </a>

      <a
        href="https://www.artstation.com/adeelchand"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-rocket"></i>
      </a>

      <a
        href="https://www.behance.net/adeelchand"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-behance"></i>
      </a>

      <a
        href="https://github.com/adeel1232"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
}

export default Social;
