import { FeatureBoxProps } from '#components/feature-box';

import {
  DOCUMENT_SCANNER,
  BATCH_SCANNING,
  SIGN_STAMP,
  ADVANCED_FILTERS,
  EXPORT_SHARE,
} from '#static';

interface FeatureBoxData extends Omit<FeatureBoxProps, 'isActive'> {
  key:
    | typeof DOCUMENT_SCANNER
    | typeof BATCH_SCANNING
    | typeof SIGN_STAMP
    | typeof ADVANCED_FILTERS
    | typeof EXPORT_SHARE;
}

export const features: FeatureBoxData[] = [
  {
    key: DOCUMENT_SCANNER,
    title: 'Scan with Ease',
    actionTitle: 'Document Scanner',
    description:
      'Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format.',
    linkUrl: '#',
    desktopImageUrl: '/img/document-scanner-lg.png',
    mobileImageUrl: '/img/document-scanner.png',
    alt: 'Document Scanner',
  },
  {
    key: SIGN_STAMP,
    title: 'Sign & Stamp',
    actionTitle: 'One Tap Focus',
    description:
      'Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!',
    linkUrl: '#',
    desktopImageUrl: '/img/signature-stamp-lg.png',
    mobileImageUrl: '/img/signature-stamp.png',
    alt: 'Sign & Stamp',
  },
  {
    key: BATCH_SCANNING,
    title: 'Batch Scanning',
    actionTitle: 'Multiple Page Scan',
    description:
      'Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.',
    linkUrl: '#',
    desktopImageUrl: '/img/batch-scanning-lg.png',
    mobileImageUrl: '/img/batch-scanning.png',
    alt: 'Batch Scanning',
  },
  {
    key: ADVANCED_FILTERS,
    title: 'Advanced Filters',
    actionTitle: 'Unique Filters',
    description:
      'Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters.',
    linkUrl: '#',
    desktopImageUrl: '/img/advanced-filters-lg.png',
    mobileImageUrl: '/img/advanced-filters.png',
    alt: 'Advanced Filters',
  },
  {
    key: EXPORT_SHARE,
    title: 'Export & Share',
    actionTitle: 'All-Round Conversion',
    description: 'Export your scans as PDF,JPG,ZIP,TXT and Word.',
    linkUrl: '#',
    desktopImageUrl: '/img/export-share-lg.png',
    mobileImageUrl: '/img/export-share.png',
    alt: 'Export & Share',
  },
];
