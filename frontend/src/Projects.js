import { useEffect, useState } from "react";
import Modal from "react-modal";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:8000";

Modal.setAppElement("#root");

function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/projects`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Projects data:", data);
        setProjects(data);
      })
      .catch((err) => console.error("Projects fetch error:", err));
  }, []);

  return (
    <section id="projects" className="projects visible">
      <h2>My Projects</h2>

      <div className="projects-grid">
        {Array.isArray(projects) &&
          projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
            >
              <h3>{project.title}</h3>

              <p>
                {project.description
                  ? project.description.substring(0, 60)
                  : "Project description"}
                ...
              </p>

              <div className="project-actions">
                <button 
                  className="btn btn-primary"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`View details for ${project.title}`}
                >
                  View Details
                </button>
                {project.live && project.live !== "#" && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-accent"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                    </svg>
                    View Project
                  </a>
                )}
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-secondary"
                    aria-label={`View GitHub repository for ${project.title}`}
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
      </div>

      {selectedProject && (
        <Modal
          isOpen={true}
          onRequestClose={() => setSelectedProject(null)}
          className="modal"
          overlayClassName="modal-overlay"
        >
          <h2>{selectedProject.title}</h2>

          <div className="project-details">
            <p>
              <strong>Overview:</strong> {selectedProject.description}
            </p>

            {selectedProject.details && (
              <p>
                <strong>More info:</strong> {selectedProject.details}
              </p>
            )}

            {selectedProject.technologies && (
              <p>
                <strong>Technologies:</strong> {selectedProject.technologies}
              </p>
            )}

            <div className="modal-actions">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View Repository
                </a>
              )}

              {selectedProject.live && selectedProject.live !== "#" && (
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                  </svg>
                  Open Live Site
                </a>
              )}
            </div>
          </div>

          <button className="btn-close" onClick={() => setSelectedProject(null)}>Close</button>
        </Modal>
      )}
    </section>
  );
}

export default Projects;

