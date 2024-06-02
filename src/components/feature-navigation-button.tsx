import { ReactSVG } from 'react-svg';

interface FeatureNavigationButtonSvgProps {
  svgPath: string;
}

interface FeatureNavigationButtonProps extends FeatureNavigationButtonSvgProps {
  buttonLabel: string;
}

const FeatureNavigationButtonSvg = ({
  svgPath,
}: FeatureNavigationButtonSvgProps) => {
  return <ReactSVG src={svgPath} />;
};

export default function FeatureNavigationButton({
  buttonLabel,
  svgPath,
}: FeatureNavigationButtonProps) {
  return (
    <button
      role="button"
      className="flex w-full min-w-[280px] flex-1 items-center justify-center gap-x-4 border-r border-neutral-300 px-6 py-4 last:border-r-0 xl:min-w-[270px]"
    >
      <FeatureNavigationButton.Svg svgPath={svgPath} />
      {buttonLabel}
    </button>
  );
}

FeatureNavigationButton.Svg = FeatureNavigationButtonSvg;
