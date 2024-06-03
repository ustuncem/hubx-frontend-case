import { useRef } from 'react';

import { ReactSVG } from 'react-svg';

interface FeatureNavigationButtonSvgProps {
  svgPath: string;
}

interface FeatureNavigationButtonProps extends FeatureNavigationButtonSvgProps {
  buttonLabel: string;
  isActive: boolean;
  onClick: () => void;
}

/**
 * FeatureNavigationButtonSvg component renders an SVG image using the given source.
 *
 * @param {FeatureNavigationButtonSvgProps} props - The props for the SVG component.
 * @returns {JSX.Element} The rendered ReactSVG component.
 */
const FeatureNavigationButtonSvg = ({
  svgPath,
}: FeatureNavigationButtonSvgProps) => {
  return <ReactSVG src={svgPath} />;
};

/**
 * FeatureNavigationButton component renders a button with an SVG and a label,
 * handles click events, and smoothly scrolls into view.
 *
 * @param {FeatureNavigationButtonProps} props - The props for the button component.
 * @param {string} props.buttonLabel - The label for the button.
 * @param {string} props.svgPath - The path to the SVG file.
 * @param {boolean} props.isActive - Flag indicating if the button is active.
 * @param {() => void} props.onClick - The function to call when the button is clicked.
 *
 * @returns {JSX.Element} The rendered button component.
 *
 * @example
 * <FeatureNavigationButton
 *   buttonLabel="Feature 1"
 *   svgPath="/path/to/icon.svg"
 *   isActive={true}
 *   onClick={() => console.log('Button clicked')}
 * />
 */
export default function FeatureNavigationButton({
  buttonLabel,
  svgPath,
  isActive,
  onClick,
}: FeatureNavigationButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleClick = () => {
    onClick();
    buttonRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  };

  return (
    <button
      ref={buttonRef}
      role="button"
      onClick={handleClick}
      className={`flex h-24 w-full min-w-[280px] flex-1 cursor-pointer snap-center items-center justify-center gap-x-4 border-r border-neutral-300 px-6 py-4 transition-colors last:border-r-0 xl:min-w-[270px] ${isActive ? 'animate-feature-svg bg-action/5' : 'bg-white'}`}
    >
      <FeatureNavigationButton.Svg svgPath={svgPath} />
      {buttonLabel}
    </button>
  );
}

FeatureNavigationButton.Svg = FeatureNavigationButtonSvg;
