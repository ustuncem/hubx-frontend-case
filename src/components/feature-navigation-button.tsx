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

const FeatureNavigationButtonSvg = ({
  svgPath,
}: FeatureNavigationButtonSvgProps) => {
  return <ReactSVG src={svgPath} />;
};

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
      className={`flex w-full min-w-[280px] flex-1 cursor-pointer snap-center items-center justify-center gap-x-4 border-r border-neutral-300 px-6 py-4 transition-colors last:border-r-0 xl:min-w-[270px] ${isActive ? 'animate-feature-svg bg-action/5' : 'bg-white'}`}
    >
      <FeatureNavigationButton.Svg svgPath={svgPath} />
      {buttonLabel}
    </button>
  );
}

FeatureNavigationButton.Svg = FeatureNavigationButtonSvg;
