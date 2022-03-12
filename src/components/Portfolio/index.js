import React from "react";
import Project from "../Project";

const projects = [
  {
    id: 0,
    title: "Weather Dashboard",
    image: "",
    description: "Allows you to trade pokemon and create a team. I did the design and front end!",
    repo: "https://github.com/BoKok/weatherDashboard",
    live: "",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;