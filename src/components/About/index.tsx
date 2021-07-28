import { FunctionalComponent, h } from 'preact';

const About: FunctionalComponent = () => (
  <section className="about">
    <p className="about__paragraph">
      Jakékoliv připomínky či nápady neváhejte sdělit na:
    </p>
    <p className="about__paragraph about__paragraph--link">
      <a href="mailto:info@debatovani.cz">info@debatovani.cz</a>
    </p>
    LOGO ADK
  </section>
);

export default About;
