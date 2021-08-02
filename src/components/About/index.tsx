import { FunctionalComponent, h } from 'preact';
import AdkLogoLight from '../../assets/adk-logo.png';
import AdkLogoDark from '../../assets/adk-logo-dark.png';

const About: FunctionalComponent = () => (
  <section className="about">
    <p className="about__paragraph">
      Jakékoliv připomínky či nápady neváhejte sdělit na:
    </p>
    <p className="about__paragraph about__paragraph--link">
      <a href="mailto:info@debatovani.cz">info@debatovani.cz</a>
    </p>
    <img src={true ? AdkLogoLight : AdkLogoDark} alt="Logo" className="about__logo" />
  </section>
);

export default About;
