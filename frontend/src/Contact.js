import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(null);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    fetch("http://127.0.0.1:8000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(() => {
        setSuccess("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSuccess(null), 3000);
      })
      .catch(() => setSuccess("Failed to send message."));
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      {success && <p className="success-msg">{success}</p>}
      <form onSubmit={handleSubmit} className="contact-form">
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;