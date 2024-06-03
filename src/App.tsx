import { useState, useCallback } from 'react';

import { motion } from 'framer-motion';

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

  const handleSignStampAnimation = useCallback(
    (duration: number) => (
      <>
        <motion.img
          initial={{ scale: 0, x: '50%', y: '-50%' }}
          animate={{ scale: 1 }}
          transition={{ duration: duration, delay: duration + 0.2 }}
          src="/img/signature-stamp-left.png"
          className="absolute -left-1/2 top-2/3 w-36 lg:w-auto"
        />
        <motion.img
          initial={{ scale: 0, x: '-50%' }}
          animate={{ scale: 1 }}
          transition={{ duration: duration, delay: duration + 0.5 }}
          src="/img/signature-stamp-right.png"
          className="absolute -right-1/2 top-28 w-36 lg:top-36 lg:w-auto"
        />
      </>
    ),
    [],
  );

  const handleBatchScanningAnimation = useCallback(
    (duration: number) => (
      <>
        <motion.img
          initial={{ x: '-50%', y: '100%', scaleX: 0.9 }}
          animate={{ y: 0 }}
          transition={{ duration: duration, delay: duration + 0.2 }}
          src="/img/batch-scanning-document.png"
          className="absolute -bottom-6 left-1/2 w-10/12 scale-x-90 lg:w-auto"
        />
        <motion.img
          src="/img/batch-scanning-document.png"
          initial={{ x: '-50%', y: '100%', scaleX: 0.95 }}
          animate={{ y: 20 }}
          transition={{ duration: duration, delay: duration + 0.6 }}
          className="absolute -bottom-6 left-1/2 w-10/12 scale-x-90 lg:w-auto"
        />
        <motion.img
          initial={{ x: '-50%', y: '100%' }}
          animate={{ y: 40 }}
          transition={{ duration: duration, delay: duration + 1 }}
          className="absolute -bottom-6 left-1/2 w-10/12 lg:w-auto"
          src="/img/batch-scanning-document.png"
        />
      </>
    ),
    [],
  );

  const handleAdvancedFiltersAnimation = useCallback(
    (duration: number) => (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: duration, delay: duration + 0.2 }}
        >
          <img
            src="/img/advanced-filters-left.png"
            className="absolute -left-5 bottom-4 w-7 lg:-left-9 lg:w-auto"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: duration, delay: duration + 0.5 }}
        >
          <img
            src="/img/advanced-filters-right.png"
            className="absolute -right-5 bottom-4 w-7 lg:-right-9 lg:w-auto"
          />
        </motion.div>
      </>
    ),
    [],
  );

  return (
    <main className="flex h-full flex-col justify-center bg-gray-100">
      <Container>
        <FeatureBox
          key={
            activeFeature === DOCUMENT_SCANNER
              ? DOCUMENT_SCANNER
              : `inactive-${DOCUMENT_SCANNER}`
          }
          title="Scan with Ease"
          actionTitle="Document Scanner"
          description="Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format."
          linkUrl="#"
          desktopImageUrl="/img/document-scanner-lg.png"
          mobileImageUrl="/img/document-scanner.png"
          alt="Document Scanner"
          isActive={activeFeature === DOCUMENT_SCANNER}
        />
        <FeatureBox
          key={
            activeFeature === SIGN_STAMP ? SIGN_STAMP : `inactive-${SIGN_STAMP}`
          }
          title="Sign & Stamp"
          actionTitle="One Tap Focus"
          description="Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!"
          linkUrl="#"
          desktopImageUrl="/img/signature-stamp-lg.png"
          mobileImageUrl="/img/signature-stamp.png"
          alt="Sign & Stamp"
          animateAfter={handleSignStampAnimation}
          isActive={activeFeature === SIGN_STAMP}
        />
        <FeatureBox
          key={
            activeFeature === BATCH_SCANNING
              ? BATCH_SCANNING
              : `inactive-${BATCH_SCANNING}`
          }
          title="Batch Scanning"
          actionTitle="Multiple Page Scan"
          description="Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document."
          linkUrl="#"
          desktopImageUrl="/img/batch-scanning-lg.png"
          mobileImageUrl="/img/batch-scanning.png"
          alt="Batch Scanning"
          animateAfter={handleBatchScanningAnimation}
          isActive={activeFeature === BATCH_SCANNING}
        />
        <FeatureBox
          key={
            activeFeature === ADVANCED_FILTERS
              ? ADVANCED_FILTERS
              : `inactive-${ADVANCED_FILTERS}`
          }
          title="Advanced Filters"
          actionTitle="Unique Filters"
          description="Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters."
          linkUrl="#"
          desktopImageUrl="/img/advanced-filters-lg.png"
          mobileImageUrl="/img/advanced-filters.png"
          alt="Advanced Filters"
          animateAfter={handleAdvancedFiltersAnimation}
          isActive={activeFeature === ADVANCED_FILTERS}
        />
        <FeatureBox
          title="Export & Share"
          actionTitle="All-Round Conversion"
          description="Export your scans as PDF,JPG,ZIP,TXT and Word."
          linkUrl="#"
          desktopImageUrl="/img/export-share-lg.png"
          mobileImageUrl="/img/export-share.png"
          alt="Export & Share"
          isActive={activeFeature === EXPORT_SHARE}
        />
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
