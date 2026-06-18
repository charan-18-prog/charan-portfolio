import { useEffect, useState } from "react";
import Modal from "react-modal";

const API_BASE_URL = "https://charan-portfolio-backend.onrender.com";

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
              onClick={() => setSelectedProject(project)}
            >
              <h3>{project.title}</h3>

              <p>
                {project.description
                  ? project.description.substring(0, 60)
                  : "Project description"}
                ...
              </p>
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

            {selectedProject.github && (
              <p>
                <strong>GitHub:</strong>{" "}
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View repository
                </a>
              </p>
            )}

            {selectedProject.live && (
              <p>
                <strong>Live Demo:</strong>{" "}
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open live site
                </a>
              </p>
            )}
          </div>

          <button onClick={() => setSelectedProject(null)}>Close</button>
        </Modal>
      )}
    </section>
  );
}

export default Projects;

