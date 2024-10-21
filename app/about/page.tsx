import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './styles.module.css';
import Image from 'next/image';
import aboutimg1 from "../images/about1img.png";
import profile from "../images/profile.jpg";
import aboutimg2 from "../images/about2img.png";
function About() {
 

  return (
    <div>
      <Navbar />

   

      <section className={styles.aboutUs}>
        <div className={styles.about1}>
          <Image src={aboutimg1} alt="" />
          <div className={styles.contents}>
            <div className={styles.content}>
              <h3>Who We Are ?</h3>
              <span>Contextual advertising programs sometimes have <br/>strict policies that need to be adhered to. Let’s take <br/>Google as an example.</span>
            </div>
            <div className={styles.content}>
              <h3>Who We Do ?</h3>
              <span>In this digital generation where information can be<br/> easily obtained within seconds, business cards still <br/>have retained their importance.</span>
            </div>
            <div className={styles.content}>
              <h3>Why Choose Us?</h3>
              <span>A two or three storey house is the ideal way to<br/> maximise the piece of earth on which our home sits,<br/> but for older or infirm people.</span>
            </div>
          </div>
        </div>

        <div className={styles.about2}>
          <Image src={aboutimg2} alt="" />
          <div className={styles.content}>
            <i className="fa-solid fa-quote-left"></i>
            <h6>“Going out after work? Take your butane curling iron with you to the <br/>office, heat it up, style your hair before you leave the office and you won’t<br/> have to make a trip back home.”</h6>
            <div className={styles.profile}>
              <Image src={profile} alt='profile' width={50}/>
              <div className={styles.content}>
                <h4>Muhammad Layan</h4>
                <span>Front-end Developer</span>
              </div>
            </div>
          </div>
        </div>

       
      </section>

      <Footer />
    </div>
  );
}

export default About;
