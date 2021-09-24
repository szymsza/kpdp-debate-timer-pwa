import { FunctionalComponent, h } from 'preact';
import localisation from '../../localisation';
import Dialog from '../Dialog';
import SafariOpenMenu from '../Icons/SafariOpenMenu';
import SafariAddToHomescreen from '../Icons/SafariAddToHomescreen';

const PWAPromptIOS: FunctionalComponent = () => (
  <Dialog
    cancel={{
      title: localisation.close,
    }}
    setVisible={() => {
    }}
  >
    <h3>Nainstalujte si Debatní stopky</h3>
    <p className="pwa-prompt__paragraph">
      Abyste měli stopky uložené mezi aplikacemi a mohli je používat offline, je potřeba
      je nainstalovat:
    </p>
    <ol className="pwa-prompt__list">
      <li className="pwa-prompt__list-item">
        Otevřete menu prohlížeče
        <span className="pwa-prompt__icon"><SafariOpenMenu /></span>
      </li>
      <li className="pwa-prompt__list-item">
        Vyberte možnost Přidat na plochu
        <span className="pwa-prompt__icon"><SafariAddToHomescreen /></span>
      </li>
      <li className="pwa-prompt__list-item">
        Potvrďte instalaci a je hotovo!
      </li>
    </ol>
  </Dialog>
);

export default PWAPromptIOS;
