import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://www.linkedin.com/in/murari-charan-608628379" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile"><FaLinkedin /></a>
      <a href="https://github.com/charan-18-prog" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile"><FaGithub /></a>
      <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile"><FaTwitter /></a>
    </div>
  );
}

export default SocialLinks;