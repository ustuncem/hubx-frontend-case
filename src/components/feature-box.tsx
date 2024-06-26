import { ReactNode, useState } from 'react';

import { motion } from 'framer-motion';

import Link, { LinkProps } from './link';

const ANIMATION_DURATION = 0.5; // in seconds

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

export interface FeatureBoxProps
  extends FeatureBoxHeaderProps,
    FeatureBoxImageProps,
    Omit<LinkProps, 'linkTitle'> {
  linkTitle?: string;
  className?: string;
  animateAfter?: ((parentAnimationDuration: number) => ReactNode) | undefined;
  isActive: boolean;
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
    <p className="mb-3 font-bold uppercase text-action lg:mb-6">
      {actionTitle}
    </p>
    <h1 className="mb-3 text-3xl font-bold lg:mb-6">{title}</h1>
    <p className="mb-3 text-[13px] leading-7 lg:mb-8 lg:text-xl lg:leading-8">
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
}: FeatureBoxImageProps) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoading = () => setLoaded((prev) => !prev);

  return (
    <picture
      onLoad={handleLoading}
      className={`${loaded ? 'h-auto' : 'h-[246px] lg:h-[600px]'}`}
    >
      <source srcSet={desktopImageUrl} media="(min-width: 1024px)" />
      <img
        className="w-auto lg:order-1 lg:justify-self-start"
        alt={alt}
        src={mobileImageUrl}
      />
    </picture>
  );
};

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
  animateAfter,
  isActive,
}: FeatureBoxProps) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: ANIMATION_DURATION,
      }}
      className={`w-full grid-cols-1 place-items-center overflow-hidden lg:grid-cols-2 ${className} ${isActive ? 'grid' : 'hidden'}`}
    >
      <div className="text-center lg:order-2 lg:text-right">
        <FeatureBox.Header
          title={title}
          actionTitle={actionTitle}
          description={description}
        />
        <FeatureBox.ActionButton linkTitle={linkTitle} linkUrl={linkUrl} />
      </div>
      <motion.div
        className="relative"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{
          duration: ANIMATION_DURATION,
          delay: ANIMATION_DURATION - 0.2,
        }}
      >
        <FeatureBox.Image
          alt={alt}
          desktopImageUrl={desktopImageUrl}
          mobileImageUrl={mobileImageUrl}
        />
        {animateAfter && animateAfter(ANIMATION_DURATION)}
      </motion.div>
    </motion.article>
  );
}

FeatureBox.Header = FeatureBoxHeader;
FeatureBox.Image = FeatureBoxImage;
FeatureBox.ActionButton = Link;
