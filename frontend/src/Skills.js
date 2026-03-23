import { FaReact, FaPython, FaHtml5, FaCss3Alt, FaDatabase, FaGitAlt, FaJs } from "react-icons/fa";

function Skills() {
  const skills = [
    { name: "React", icon: <FaReact color="#61DBFB" /> },
    { name: "FastAPI", icon: <FaPython color="#3776AB" /> },
    { name: "Python", icon: <FaPython color="#FFD43B" /> },
    { name: "JavaScript", icon: <FaJs color="#F0DB4F" /> },
    { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
    { name: "CSS", icon: <FaCss3Alt color="#264de4" /> },
    { name: "MySQL", icon: <FaDatabase color="#00758F" /> },
    { name: "Git", icon: <FaGitAlt color="#F1502F" /> },
  ];

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;