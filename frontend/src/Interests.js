function Interests() {
  const interests = [
    "🏏 Cricket",
    "💻 Watching Movies",
    "🚀 Learning New Skills",
  ];

  return (
    <section id="interests">
      <h2>Interests</h2>

      <div className="interest-grid">
        {interests.map((item, index) => (
          <div key={index} className="interest-card">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Interests;