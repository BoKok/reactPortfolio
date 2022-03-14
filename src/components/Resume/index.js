import React from "react";

function Resume() {
  return (
    <div>
      <div>
        <p>Resume</p>
        <hr />
        <a
          href={process.env.PUBLIC_URL + "resume.pdf"}
          target="_blank" rel="noreferrer"
        >
          <span>Download</span>
        </a>
      </div>
      <div>
        <p>Skills</p>
        <hr />
        <ul>
            <li>HTML, CSS, Javascript, </li>
            <li>JSON, </li>
            <li>Markdown, </li>
            <li>Git, </li>
            <li>Github Repo</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;