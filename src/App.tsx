import { AnimatePresence } from 'framer-motion';

import { Container, FeatureBox, FeatureNavigationButton } from '#components';

export function App() {
  return (
    <main className="h-full">
      <Container>
        <AnimatePresence>
          <FeatureBox
            title="Scan with Ease"
            actionTitle="Document Scanner"
            description="Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format."
            linkUrl="#"
            desktopImageUrl="/img/document-scanner-lg.png"
            mobileImageUrl="/img/document-scanner.png"
            alt="Document Scanner"
          />
        </AnimatePresence>
      </Container>
      <section
        id="navigation-tabs"
        className="flex justify-between overflow-x-auto"
      >
        <FeatureNavigationButton
          svgPath="/svg/document-scanner.svg"
          buttonLabel="Document Scanner"
        />
        <FeatureNavigationButton
          svgPath="/svg/sign-stamp.svg"
          buttonLabel="Sign & Stamp"
        />
        <FeatureNavigationButton
          svgPath="/svg/batch-scanning.svg"
          buttonLabel="Batch Scanning"
        />
        <FeatureNavigationButton
          svgPath="/svg/advanced-filters.svg"
          buttonLabel="Advanced Filters"
        />
        <FeatureNavigationButton
          svgPath="/svg/export-share.svg"
          buttonLabel="Export & Share"
        />
      </section>
    </main>
  );
}
