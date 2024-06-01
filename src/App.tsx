import React from 'react';

import { Container } from '#components';

export function App() {
  return (
    <main className="h-full">
      <Container>
        <article className="grid grid-cols-1 place-items-center lg:grid-cols-2">
          <div className="text-center lg:order-2 lg:text-right">
            <p className="mb-6 font-bold uppercase text-action">
              Document Scanner
            </p>
            <h1 className="mb-6 text-3xl font-bold">Scan With Ease</h1>
            <p className="mb-8 text-sm leading-7 lg:text-xl lg:leading-8">
              Scan any document instantly with your mobile device by just a few
              steps. Save as PDF,JPG,ZIP,TXT and Word format.
            </p>
            <a
              href="#"
              className="mb-9 inline-block border border-neutral-200 px-4 py-3 transition-colors hover:border-action hover:bg-action hover:text-white focus:border-action focus:bg-action focus:text-white lg:px-5 lg:py-4 lg:text-xl"
            >
              Learn More
            </a>
          </div>
          <picture>
            <source
              srcSet="/img/document-scanner-lg.png"
              media="(min-width: 1024px)"
            />
            <img
              className="w-auto lg:order-1 lg:justify-self-start"
              alt=""
              src="/img/document-scanner.png"
            />
          </picture>
        </article>
      </Container>
    </main>
  );
}
