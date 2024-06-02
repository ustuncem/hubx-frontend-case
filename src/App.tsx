import { useState } from 'react';

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
        {activeFeature === DOCUMENT_SCANNER && (
          <FeatureBox
            key={DOCUMENT_SCANNER}
            title="Scan with Ease"
            actionTitle="Document Scanner"
            description="Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format."
            linkUrl="#"
            desktopImageUrl="/img/document-scanner-lg.png"
            mobileImageUrl="/img/document-scanner.png"
            alt="Document Scanner"
          />
        )}
        {activeFeature === SIGN_STAMP && (
          <FeatureBox
            key={SIGN_STAMP}
            title="Sign & Stamp"
            actionTitle="One Tap Focus"
            description="Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!"
            linkUrl="#"
            desktopImageUrl="/img/signature-stamp-lg.png"
            mobileImageUrl="/img/signature-stamp.png"
            alt="Sign & Stamp"
          />
        )}
        {activeFeature === BATCH_SCANNING && (
          <FeatureBox
            key={BATCH_SCANNING}
            title="Batch Scanning"
            actionTitle="Multiple Page Scan"
            description="Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document."
            linkUrl="#"
            desktopImageUrl="/img/batch-scanning-lg.png"
            mobileImageUrl="/img/batch-scanning.png"
            alt="Batch Scanning"
          />
        )}
        {activeFeature === ADVANCED_FILTERS && (
          <FeatureBox
            key={ADVANCED_FILTERS}
            title="Advanced Filters"
            actionTitle="Unique Filters"
            description="Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters."
            linkUrl="#"
            desktopImageUrl="/img/advanced-filters-lg.png"
            mobileImageUrl="/img/advanced-filters.png"
            alt="Advanced Filters"
          />
        )}
        {activeFeature === EXPORT_SHARE && (
          <FeatureBox
            key={EXPORT_SHARE}
            title="Export & Share"
            actionTitle="All-Round Conversion"
            description="Export your scans as PDF,JPG,ZIP,TXT and Word."
            linkUrl="#"
            desktopImageUrl="/img/export-share-lg.png"
            mobileImageUrl="/img/export-share.png"
            alt="Export & Share"
          />
        )}
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
