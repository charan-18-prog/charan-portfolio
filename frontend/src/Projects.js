import { useEffect, useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

Modal.setAppElement("#root");

function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://portfolio-backend-3lp6.onrender.com/projects")
      .then((res) => res.json())
      .then((data) => {
        console.log("Projects data:", data);   // 🔥 debug line
        setProjects(data);
      })
      .catch((err) => console.log(err));
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

          <p>{selectedProject.description}</p>

          <button onClick={() => setSelectedProject(null)}>Close</button>
        </Modal>
      )}
    </section>
  );
}

export default Projects;

