import { FunctionalComponent, h } from 'preact';
import { useContext } from 'preact/hooks';
import { Context } from '../../store';
import AdkLogoLight from '../../assets/adk-logo.png';
import AdkLogoDark from '../../assets/adk-logo-dark.png';

const About: FunctionalComponent = () => {
  const { state } = useContext(Context);

  // TODO - deal with 'auto' value (+ use some global selector)
  const isDarkTheme = state.themes.find((item) => item.value === 'dark')!.active;

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
