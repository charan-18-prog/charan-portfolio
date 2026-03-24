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

  // ✅ UPDATED SUBMIT FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://127.0.0.1:8000/contact", {
        method: "POST", // 👉 same route (DB + email both)
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await res.json();

      setSuccess("Message sent successfully ✅");
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setSuccess(null), 3000);
    } catch (error) {
      console.error(error);
      setSuccess("Error sending message ❌");
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