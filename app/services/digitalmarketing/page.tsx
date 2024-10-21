import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import styles from "./styles.module.css";

function DigitalMarketing() {
  return (
    <div>
      <Navbar />

      <section className={styles.bestServices}>
        <div className={styles.container}>
          <h2>Best <span>Digital Marketing</span> Services</h2>
          <p className={styles.description}>
            We offer top-tier digital marketing services tailored to your business needs. Whether
            you’re looking to enhance your online presence or drive targeted traffic, our expert team
            is here to deliver high-quality results.
          </p>
          <ul className={styles.features}>
            <li>Search Engine Optimization (SEO)</li>
            <li>Social Media Marketing</li>
            <li>Content Creation & Strategy</li>
            <li>Email Marketing Campaigns</li>
          </ul>
          <button className={styles.contactButton}>Contact Us</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default DigitalMarketing;
