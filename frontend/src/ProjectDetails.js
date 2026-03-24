import { useParams, useNavigate } from "react-router-dom";
import "./App.css";

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const projectData = {
     1: {
      title: "Portfolio Website",
      description:
        "A full-stack personal portfolio built using React and FastAPI with MySQL database integration.",

      problem:
        "I wanted to build a professional portfolio to showcase my skills, projects, and allow users to contact me easily.",

      features: [
        "Responsive UI using React",
        "Contact form with backend integration",
        "Projects display section",
        "Smooth scrolling and animations",
      ],

      tech: "React, FastAPI, MySQL",

      role:
        "I designed and developed both frontend and backend, including API creation and database integration.",

      learnings:
        "Learned how to connect frontend with backend, handle API calls, and manage database operations.",

      future:
        "Add authentication, admin dashboard, and deploy it online.",

      github: "https://github.com/",
      live: "#",
    },

    2: {
      title: "Face Emotion Recognition",
      description:
        "An AI-based project that detects human emotions using camera input.",

      problem:
        "Understanding human emotions through facial expressions using machine learning.",

      features: [
        "Real-time face detection",
        "Emotion classification",
        "Camera integration",
      ],

      tech: "Python, OpenCV, Django",

      role:
        "Worked on model integration and backend logic for emotion detection.",

      learnings:
        "Gained knowledge in computer vision and real-time data processing.",

      future:
        "Improve accuracy and deploy as a web app.",

      github: "https://github.com/",
      live: "#",
    },
  };

  const project = projectData[parseInt(id)];

  if (!project) return <p>Project not found</p>;

  return (
    <div className="project-details-container">
      <div className="project-details-card">
        <h2>{project.title}</h2>

        <p className="project-desc">{project.description}</p>

        <p><strong>🧠 Problem:</strong> {project.problem}</p>

        <div>
          <strong>✨ Features:</strong>
          <ul>
            {project.features.map((f, index) => (
              <li key={index}>{f}</li>
            ))}
          </ul>
        </div>

        <p><strong>⚙️ Tech Stack:</strong> {project.tech}</p>

        <p><strong>👨‍💻 My Role:</strong> {project.role}</p>

        <p><strong>📘 Learnings:</strong> {project.learnings}</p>

        <p><strong>🚀 Future:</strong> {project.future}</p>

        <div className="project-buttons">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn github"
          >
            🔗 GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn live"
          >
            🚀 Live Demo
          </a>
        </div>

        {/* ✅ BACK BUTTON */}
        <button className="btn close" onClick={() => navigate("/")}>
          ⬅ Back
        </button>
      </div>
    </div>
  );
}

export default ProjectDetails;