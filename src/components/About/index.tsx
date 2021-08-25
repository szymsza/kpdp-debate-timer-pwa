import { FunctionalComponent, h } from 'preact';
import AdkLogoLight from '../../assets/adk-logo.png';
import AdkLogoDark from '../../assets/adk-logo-dark.png';
import { getActiveThemeColour } from '../../themes';

const About: FunctionalComponent = () => {
  const isDarkTheme = getActiveThemeColour() === 'dark';

  return (
    <section className="about">
      <p className="about__paragraph">
        Jakékoliv připomínky či nápady neváhejte sdělit na:
      </p>
      <p className="about__paragraph about__paragraph--link">
        <a href="mailto:info@debatovani.cz">info@debatovani.cz</a>
      </p>
      <img src={isDarkTheme ? AdkLogoDark : AdkLogoLight} alt="Logo" className="about__logo" />
    </section>
  );
};

export default About;
