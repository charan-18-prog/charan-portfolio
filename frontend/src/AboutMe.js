import profile from "./assets/profile.jpg";

function AboutMe() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="img-wrapper">
          <img src={profile} alt="Charan" className="profile-img" />
        </div>

        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hello, I’m <strong>Charan</strong>, a dedicated Full Stack Developer focused on building modern web applications with React and FastAPI. I enjoy creating responsive, user-first experiences and continually advancing my skills through real-world development projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;