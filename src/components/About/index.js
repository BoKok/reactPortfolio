import React from "react";

function About() {
  return (
    <div>
      <p>A learning Full Stack Developer</p>
      <hr />
      <img className="pic" src={process.env.PUBLIC_URL + '/profile.png'} alt="profilepic"/>
      <p>
        My name is Bo Kok
      </p>
      <p>
        I am an inspiring full stack developer working with Javascript, HTML, SQL, and React. I graduated with an Associates in IT from Collin College.<br></br>
        I joined the SMU coding bootcamp to increase my coding languages and develop repositories for real world application.
      </p>
    </div>
  );
}

export default About;