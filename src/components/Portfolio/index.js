import React from "react";
import Project from "../Project";

const projects = [
  {
    id: 0,
    title: "Weather Dashboard",
    image: "/img/weather-dashboard.png",
    description: "The intent of this website is to create a dashboard showing the temperature, UV rating, wind speed and humididty of any given city, as well as the forecast for the next five days. All history of previous searches will be logged. Icons will also display the weather conditions of each day.",
    repo: "https://github.com/BoKok/weatherDashboard",
  },
  {
    id: 0,
    title: "Work Scheduler",
    image: "/img/schedule.png",
    description: "The intent of this project is to construct a a simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.",
    repo: "https://github.com/BoKok/schedule",
  },
  {
    id: 0,
    title: "Note Taker",
    image: "/img/note.png",
    description: "This creates a note taker that can save responses and delete past notes.",
    repo: "https://github.com/BoKok/noteTaker",
  },
  {
    id: 0,
    title: "Game Grab",
    image: "/img/video.png",
    description: "Game Grab provides users a list of the best video game deals on Steam for that day (top 60). Users will see the top 60 game deals from Steam and can choose to either scroll the deal list or use the search bar to check for the game of their choice. The users recent search terms will be saved on the left side of the page and will return to those search results on click. Each game card will contain the game title that links out to Steam, a thumbnail, the steam rating, the sale price listed in USD and EUR, and a link to the Metacritic review. The first Server side API we will use is CheapShark which provides all the game data for the app. The second SS API we will use is Free Currency Converter which we will use to convert the game prices from USD to EUR so that we have the 2 most common global currencies displayed.",
    repo: "https://github.com/BoKok/project-API",
  },
  {
    id: 0,
    title: "Maxed Out: a fitness tracker",
    image: "/img/max.png",
    description: "A simple and easy to use at home fitness tracker where a user can log and view their workouts from the comfort of their own home. After a user logs in, they are taken to their personal workout dashboard, where they can see all workouts they have completed and add new ones.",
    repo: "https://github.com/Travis2445/maxed-out",
  },
  {
    id: 0,
    title: "Password Generator",
    image: "/img/pwd.png",
    description: "Creates a password when given restrictions on settings",
    repo: "https://github.com/BoKok/pwdgenerator",
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