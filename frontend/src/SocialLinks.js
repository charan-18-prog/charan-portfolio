import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
    </div>
  );
}

export default SocialLinks;