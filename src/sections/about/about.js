import AboutImage from "../../assets/about.jpg";
import { HiDownload } from "react-icons/hi";
import data from "./data";
import Card from "../../components/card";
import "./about.css";

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            Building projects has always been my passion. Being in the web
            development industry for over 3 years and working with my client in
            New Zealand, I'm always motivated to do more!
          </p>
          <p>
            Hi, my name is Raghav Nayak from Mumbai, Maharashtra. I'm a
            full-stack web developer currently pursuing Bachelors degree in
            Computer Applications (BCA). My top priority is to get your business
            online the right way, giving you industry-standard design and all
            the functionality you need to operate smoothly online. Get in touch
            today with the details of your project let's get started!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
