import { FunctionalComponent, h } from 'preact';

export interface RadioOption {
  label: string
  value: string
  active: boolean
}

interface RadioProps {
  label: string
  options: RadioOption[]
  onChange: (newValue: string) => void
}

const Radio: FunctionalComponent<RadioProps> = ({ label, options, onChange }) => (
  <section className="radio">
    <p className="radio__label">{label}</p>
    <div className="radio__options">
      {
        options.map((option: RadioOption) => (
          <button
            type="button"
            className={`radio__option ${option.active ? 'radio__option--active' : ''}`}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </button>
        ))
      }
    </div>
  </section>
);

export default Radio;
