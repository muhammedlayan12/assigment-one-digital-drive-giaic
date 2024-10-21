import styles from '../styles/Hero.module.css';
import Image from 'next/image';
import heroimg from "../images/heroimg.png";

function Hero() {
  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.content}>
          <h3>We Are The Solution<br />Oriented <span>Digital</span><br />Agency</h3>
          <p>
            At our core, we believe in empowering businesses through innovative digital solutions.<br />
            As a solution-oriented digital agency, we focus on understanding our clients&apos; unique<br />
            challenges and crafting tailored strategies that drive results.
          </p>
          <button>Watch More</button>
        </div>
        <div className={styles.image}>
          <Image src={heroimg} alt="heroimg" />
        </div>
      </section>
    </div>
  );
}

export default Hero;
