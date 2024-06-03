export interface LinkProps {
  linkUrl: string;
  linkTitle: string;
}

/**
 * Link component renders an anchor tag with styled classes and hover/focus effects.
 *
 * @param {LinkProps} props - The props for the Link component.
 *
 * @returns {JSX.Element} The rendered link component.
 *
 * @example
 * <Link linkUrl="https://example.com" linkTitle="Example Link" />
 */
export default function Link({ linkUrl, linkTitle }: LinkProps) {
  return (
    <a
      href={linkUrl}
      className="mb-5 inline-block border border-neutral-200 px-4 py-3 transition-colors hover:border-action hover:bg-action hover:text-white focus:border-action focus:bg-action focus:text-white lg:mb-9 lg:px-5 lg:py-4 lg:text-xl"
    >
      {linkTitle}
    </a>
  );
}
