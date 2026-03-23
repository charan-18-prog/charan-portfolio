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
            Hi, I am <strong>Charan</strong>. I am learning Full Stack Development using React and FastAPI.
            I enjoy building modern web applications and improving my skills daily.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;