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
    <h3>{localisation.pwaPromptIOSTitle}</h3>
    <p className="pwa-prompt__paragraph">
      {localisation.pwaPromptIOSParagraph}
    </p>
    <ol className="pwa-prompt__list">
      <li className="pwa-prompt__list-item">
        {localisation.pwaPromptIOSOpenMenu}
        <span className="pwa-prompt__icon"><SafariOpenMenu /></span>
      </li>
      <li className="pwa-prompt__list-item">
        {localisation.pwaPromptIOSAddToHomescreen}
        <span className="pwa-prompt__icon"><SafariAddToHomescreen /></span>
      </li>
      <li className="pwa-prompt__list-item">
        {localisation.pwaPromptIOSDone}
      </li>
    </ol>
  </Dialog>
);

export default PWAPromptIOS;
