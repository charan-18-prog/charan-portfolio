import { useEffect, useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

Modal.setAppElement("#root");

function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://charan-portfolio-backend.onrender.com/projects")   // ✅ FIXED URL
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section id="projects" className="projects visible">
      <h2>My Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => setSelectedProject(project)}
          >
            <h3>{project.title}</h3>
            <p>{project.description.substring(0, 60)}...</p>
          </div>
        ))}
      </div>

      {selectedProject && (
        <Modal
          isOpen={true}
          onRequestClose={() => setSelectedProject(null)}
          contentLabel="Project Details"
          className="modal"
          overlayClassName="modal-overlay"
        >
          <h2>{selectedProject.title}</h2>

          <p>{selectedProject.description}</p>

          {selectedProject.technologies && (
            <p>
              <strong>Technologies:</strong> {selectedProject.technologies}
            </p>
          )}

          <br />

          {selectedProject.github && (
            <a
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 GitHub
            </a>
          )}

          <br />

          {selectedProject.live && (
            <a
              href={selectedProject.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              🚀 Live Demo
            </a>
          )}

          <br /><br />

          <button onClick={() => setSelectedProject(null)}>Close</button>

          <button
            onClick={() => navigate(`/project/${selectedProject.id}`)}
            style={{ marginLeft: "10px" }}
          >
            View Full Details
          </button>
        </Modal>
      )}
    </section>
  );
}

export default Projects;

