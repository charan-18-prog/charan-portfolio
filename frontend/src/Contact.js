import { useState } from "react";
import emailjs from "@emailjs/browser";

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
<<<<<<< HEAD
e.preventDefault();

try {
await emailjs.send(
"service_m0ojdmg",
"template_x02ayd8",
{
name: form.name,
email: form.email,
message: form.message,
},
"cpIFMTvpJlajeEUeg"
);


setSuccess("Message sent successfully ✅");

setForm({
  name: "",
  email: "",
  message: "",
});


} catch (error) {
console.error(error);
setSuccess("Error sending message ❌");
}

setTimeout(() => setSuccess(null), 3000);
};

=======
  e.preventDefault();

  try {
    await emailjs.send(
      "service_m0ojdmg",
      "template_x02ayd8",
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
      "cpIFMTvpJlajeEUeg"
    );

    setSuccess("Message sent successfully ✅");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  } catch (error) {
    console.error(error);
    setSuccess("Error sending message ❌");
  }

  setTimeout(() => setSuccess(null), 3000);
};
>>>>>>> 3a8c1a0 (Add EmailJS contact form)

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