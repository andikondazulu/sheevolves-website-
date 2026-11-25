import Image from "next/image";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <footer className="footer">
        <div className="container">
          <h2 className="center footer-title">
            Your next <em>chapter</em> begins here.
          </h2>
          <div className="footer-grid">
            <Newsletter />
            <div>
              <h4>Need Some Help?</h4>
              <a href="#">Contact Us</a>
            </div>
            <div>
              <h4>Quick Links</h4>
              <a href="/#home">Home</a>
              <a href="/#about">About</a>
              <a href="/#what-we-do">What We Do</a>
              <a href="/#celebrations">Celebrations</a>
              <a href="/#wellness">Wellness</a>
            </div>
          </div>
          <div className="footer-bottom">
            <Image src="/logo.png" alt="SheEvolves Co." width={110} height={46} className="footer-logo" />
            <p>© {new Date().getFullYear()} SheEvolves Co. Made with love for every woman.</p>
          </div>
        </div>
    </footer>
  );
}