import { useState } from 'react';

import { AnimatePresence } from 'framer-motion';

import { Container, FeatureBox, FeatureNavigationButton } from '#components';
import {
  DOCUMENT_SCANNER,
  BATCH_SCANNING,
  SIGN_STAMP,
  ADVANCED_FILTERS,
  EXPORT_SHARE,
} from '#static';

export function App() {
  const [activeFeature, setActiveFeature] = useState(DOCUMENT_SCANNER);

  const handleButtonClick = (clickedFeature: string) => () => {
    setActiveFeature(clickedFeature);
  };

  return (
    <main className="flex h-full flex-col justify-center">
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
          isActive={activeFeature === DOCUMENT_SCANNER}
          onClick={handleButtonClick(DOCUMENT_SCANNER)}
        />
        <FeatureNavigationButton
          svgPath="/svg/sign-stamp.svg"
          buttonLabel="Sign & Stamp"
          isActive={activeFeature === SIGN_STAMP}
          onClick={handleButtonClick(SIGN_STAMP)}
        />
        <FeatureNavigationButton
          svgPath="/svg/batch-scanning.svg"
          buttonLabel="Batch Scanning"
          isActive={activeFeature === BATCH_SCANNING}
          onClick={handleButtonClick(BATCH_SCANNING)}
        />
        <FeatureNavigationButton
          svgPath="/svg/advanced-filters.svg"
          buttonLabel="Advanced Filters"
          isActive={activeFeature === ADVANCED_FILTERS}
          onClick={handleButtonClick(ADVANCED_FILTERS)}
        />
        <FeatureNavigationButton
          svgPath="/svg/export-share.svg"
          buttonLabel="Export & Share"
          isActive={activeFeature === EXPORT_SHARE}
          onClick={handleButtonClick(EXPORT_SHARE)}
        />
      </section>
    </main>
  );
}
