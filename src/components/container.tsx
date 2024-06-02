import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
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
      className={`mx-auto flex w-full max-w-[1200px] flex-col items-center justify-center px-4 ${className}`}
    >
      {children}
    </section>
  );
}
