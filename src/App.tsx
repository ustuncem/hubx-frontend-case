import { useState } from 'react';

import { features } from '#static/feature-data';

import { Container, FeatureBox, FeatureNavigationButton } from '#components';
import {
  useAdvancedFiltersAnimation,
  useBatchScanningAnimation,
  useExportShareAnimation,
  useSignStampAnimation,
} from '#hooks';
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

  const handleSignStampAnimation = useSignStampAnimation();

  const handleBatchScanningAnimation = useBatchScanningAnimation();

  const handleAdvancedFiltersAnimation = useAdvancedFiltersAnimation();

  const handleExportShareAnimation = useExportShareAnimation();

  const callbackData = {
    DOCUMENT_SCANNER: undefined,
    SIGN_STAMP: handleSignStampAnimation,
    BATCH_SCANNING: handleBatchScanningAnimation,
    ADVANCED_FILTERS: handleAdvancedFiltersAnimation,
    EXPORT_SHARE: handleExportShareAnimation,
  };

  return (
    <main className="flex min-h-full flex-col justify-center overflow-y-auto bg-gray-100">
      <Container>
        {features.map((feature) => (
          <FeatureBox
            {...feature}
            key={
              activeFeature === feature.key
                ? feature.key
                : `inactive-${feature.key}`
            }
            animateAfter={callbackData[feature.key]}
            isActive={activeFeature === feature.key}
          />
        ))}
      </Container>
      <section
        id="navigation-tabs"
        className="no-scrollbar flex snap-x justify-between overflow-x-auto"
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
