import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ UPDATED SUBMIT FUNCTION (live backend URL)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://charan-portfolio-backend.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess("Message sent successfully ✅");
        setForm({ name: "", email: "", message: "" });
      } else {
        setSuccess("Error sending message ❌");
      }

      setTimeout(() => setSuccess(null), 3000);
    } catch (error) {
      console.error(error);
      setSuccess("Server error ❌");
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      {success && <p className="success-msg">{success}</p>}

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;