import Link, { LinkProps } from './link';

interface FeatureBoxHeaderProps {
  title: string;
  actionTitle: string;
  description: string;
}

interface FeatureBoxImageProps {
  mobileImageUrl: string;
  desktopImageUrl: string;
  alt: string;
}

interface FeatureBoxProps
  extends FeatureBoxHeaderProps,
    FeatureBoxImageProps,
    Omit<LinkProps, 'linkTitle'> {
  linkTitle?: string;
  className?: string;
}

/**
 * FeatureBoxHeader component to display the header of the feature box.
 * @param {FeatureBoxHeaderProps} props - Props for the component.
 * @returns {JSX.Element}
 */
const FeatureBoxHeader = ({
  title,
  actionTitle,
  description,
}: FeatureBoxHeaderProps) => (
  <>
    <p className="mb-6 font-bold uppercase text-action">{actionTitle}</p>
    <h1 className="mb-6 text-3xl font-bold">{title}</h1>
    <p className="mb-8 text-sm leading-7 lg:text-xl lg:leading-8">
      {description}
    </p>
  </>
);

/**
 * FeatureBoxImage component to display the image of the feature box.
 * @param {FeatureBoxImageProps} props - Props for the component.
 * @returns {JSX.Element}
 */
const FeatureBoxImage = ({
  mobileImageUrl,
  desktopImageUrl,
  alt,
}: FeatureBoxImageProps) => (
  <picture>
    <source srcSet={desktopImageUrl} media="(min-width: 1024px)" />
    <img
      className="w-auto lg:order-1 lg:justify-self-start"
      alt={alt}
      src={mobileImageUrl}
    />
  </picture>
);

/**
 * FeatureBox component to display a feature with a header, image, and action button.
 * @param {FeatureBoxProps} props - Props for the component.
 * @returns {JSX.Element}
 */
export default function FeatureBox({
  title,
  actionTitle,
  description,
  linkUrl,
  linkTitle = 'Learn More',
  desktopImageUrl,
  mobileImageUrl,
  alt,
  className = '',
}: FeatureBoxProps) {
  return (
    <article
      className={`grid grid-cols-1 place-items-center lg:grid-cols-2 ${className}`}
    >
      <div className="text-center lg:order-2 lg:text-right">
        <FeatureBox.Header
          title={title}
          actionTitle={actionTitle}
          description={description}
        />
        <FeatureBox.ActionButton linkTitle={linkTitle} linkUrl={linkUrl} />
      </div>
      <FeatureBox.Image
        alt={alt}
        desktopImageUrl={desktopImageUrl}
        mobileImageUrl={mobileImageUrl}
      />
    </article>
  );
}

FeatureBox.Header = FeatureBoxHeader;
FeatureBox.Image = FeatureBoxImage;
FeatureBox.ActionButton = Link;
