function Certificates() {
  const certs = [
    {
      title: "Internship on Python Full Stack",
      platform: "Pantech eLearning",
    },
    {
      title: "Internship on Advanced Data Science",
      platform: " APSSDC",
    },
    {
      title: "Google Cloud Computing",
      platform: "Online",
    },
  ];

  return (
    <section id="certificates">
      <h2>Certificates</h2>

      <div className="cert-grid">
        {certs.map((cert, index) => (
          <div key={index} className="cert-card">
            <h3>{cert.title}</h3>
            <p>{cert.platform}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;