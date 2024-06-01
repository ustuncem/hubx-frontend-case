export function App() {
  return (
    <main className="h-full">
      <section
        id="content-container"
        className="max-w-[1200px] w-full mx-auto px-4 flex flex-col items-center justify-center h-full"
      >
        <article className="grid grid-cols-1 place-items-center lg:grid-cols-2">
          <div className="text-center lg:order-2 lg:text-right">
            <p className="font-bold uppercase text-action mb-6">
              Document Scanner
            </p>
            <h1 className="text-3xl font-bold mb-6">Scan With Ease</h1>
            <p className="text-sm mb-8 leading-7 lg:text-xl lg:leading-8">
              Scan any document instantly with your mobile device by just a few
              steps. Save as PDF,JPG,ZIP,TXT and Word format.
            </p>
            <a
              href="#"
              className="inline-block px-4 py-3 border mb-9 border-neutral-200 transition-colors hover:bg-action hover:border-action hover:text-white focus:bg-action focus:border-action focus:text-white lg:px-5 lg:py-4 lg:text-xl"
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
      </section>
    </main>
  );
}
