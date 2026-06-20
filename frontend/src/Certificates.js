function Certificates() {
  const certs = [
    {
      title: "Internship on Advanced Data Science",
      platform: "APSSDC",
      duration: "February 2024 – May 2024"
    },
    {
      title: "Internship on Python Full Stack",
      platform: "Pantech eLearning",
      duration: "March 2025 – May 2025"
    },
    {
      title: "Google Cloud Computing",
      platform: "Online",
      duration: "September 2025 – November 2025"
    }
  ];

  return (
    <section id="certificates">
      <h2>Certificates</h2>

      <div className="cert-grid">
        {certs.map((cert, index) => (
          <div key={index} className="cert-card">
            <h3>{cert.title}</h3>
            <p><strong>Platform:</strong> {cert.platform}</p>
            <p><strong>Duration:</strong> {cert.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;