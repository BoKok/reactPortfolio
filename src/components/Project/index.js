import React from "react";

function Project(props) {
  return (
    <div>
      <div>
        {props.projects.map((project) => (
          <div>
            <div>
              <div>
                <figure>
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <img className="portfolioImage" src={process.env.PUBLIC_URL + project.image} alt="Placeholder image" />
                  </a>
                </figure>
              </div>
              <div>
                <div>
                  <div></div>
                  <div>
                    <p className="title is-4" key={project.id}>
                      {project.title}
                    </p>
                  </div>
                </div>

                <div>
                  {project.description}
                  <br />
                  <br />
                  <div>
                    <footer>
                      <a
                        href={project.repo}
                        className="card-footer-item"
                        target="_blank" rel="noreferrer"
                      >
                        Repo
                      </a>
                      <br />
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;