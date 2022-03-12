import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Technical Writer and Something-of-a Full Stack Developer</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Emily Necciai Mayeski"/>
      <p className="content is-italic mt-4">
        My name is Bo Kok
      </p>
      <p className="content">
        ...
      </p>
    </div>
  );
}

export default About;