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
  return (
    <button
      role="button"
      onClick={onClick}
      className={`flex w-full min-w-[280px] flex-1 items-center justify-center gap-x-4 border-r border-neutral-300 px-6 py-4 transition-colors last:border-r-0 xl:min-w-[270px] ${isActive ? 'bg-action/5' : 'bg-white'}`}
    >
      <FeatureNavigationButton.Svg svgPath={svgPath} />
      {buttonLabel}
    </button>
  );
}

FeatureNavigationButton.Svg = FeatureNavigationButtonSvg;
