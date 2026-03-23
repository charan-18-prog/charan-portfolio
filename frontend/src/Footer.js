import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <footer className="footer">
      <SocialLinks />
      <p>&copy; {new Date().getFullYear()} Charan. All rights reserved.</p>
    </footer>
  );
}

export default Footer;