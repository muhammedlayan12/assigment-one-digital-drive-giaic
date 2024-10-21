import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from "../styles/Services.module.css";

function Services() {
  return (
    <div>
        <section className={styles.ourServices}>
            <h3>Our <span>Services</span></h3>
            <div className={styles.services}>
                <div className={styles.service}>
                    <i className="fa-solid fa-bullhorn"></i>
                    <div className={styles.content}>
                        <h4>Digital Marketing</h4>
                        <span>Boost your brand with tailored digital marketing strategies.</span>
                    </div>
                </div>
                
                <div className={styles.service}>
                    <i className="fa-solid fa-code"></i>
                    <div className={styles.content}>
                        <h4>Web Development</h4>
                        <span>Create stunning, responsive websites that engage users.</span>
                    </div>
                </div>

                <div className={styles.service}>
                    <i className="fa-solid fa-chart-line"></i>
                    <div className={styles.content}>
                        <h4>SEO Optimization</h4>
                        <span>Improve your search rankings and drive more traffic to your site.</span>
                    </div>
                </div>

                <div className={styles.service}>
                    <i className="fa-solid fa-mobile-screen"></i>
                    <div className={styles.content}>
                        <h4>Mobile App Development</h4>
                        <span>Design and develop mobile apps that offer seamless experiences.</span>
                    </div>
                </div>

                <div className={styles.service}>
                    <i className="fa-solid fa-pencil-alt"></i>
                    <div className={styles.content}>
                        <h4>Content Creation</h4>
                        <span>Engaging content that resonates with your audience.</span>
                    </div>
                </div>

                <div className={styles.service}>
                    <i className="fa-solid fa-headset"></i>
                    <div className={styles.content}>
                        <h4>Customer Support</h4>
                        <span>24/7 support to ensure customer satisfaction.</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Services;
