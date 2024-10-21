import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import styles from "./styles.module.css";

function WebDevelopment() {
  return (
    <div>
      <Navbar />

      <section className={styles.bestServices}>
        <div className={styles.container}>
          <h2>Best <span>Web</span> Development Services</h2>
          <p className={styles.description}>
            We offer top-tier web development services tailored to your business needs. Whether
            you’re looking for responsive websites or custom software solutions, our expert team
            is here to deliver high-quality results.
          </p>
          <ul className={styles.features}>
            <li>Custom Website Development</li>
            <li>Responsive Design</li>
            <li>UI/UX Design & Prototyping</li>
            <li>Ongoing Maintenance & Support</li>
          </ul>
          <button className={styles.contactButton}>Contact Us</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default WebDevelopment;
