import { ReactElement } from 'react';

interface Props {
  className: string;
  children: ReactElement;
}

/**
 * Container component for general consistent layout.
 * It wraps the content in a section with specified styling.
 *
 * @param {string} className - Additional class names for the container.
 * @param {ReactElement} children - The content to be wrapped inside the container.
 * @returns {ReactElement} The styled container component.
 */
export default function Container({ className, children }: Props) {
  return (
    <section
      className={`max-w-[1200px] w-full mx-auto px-4 flex flex-col items-center justify-center h-full ${className}`}
    >
      {children}
    </section>
  );
}
