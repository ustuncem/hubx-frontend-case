import { useCallback } from 'react';

import { motion } from 'framer-motion';

export default function useExportShareAnimation() {
  return useCallback(
    (duration: number) => (
      <div className="absolute inset-0">
        <motion.img
          initial={{ y: '200%' }}
          animate={{ y: '0' }}
          transition={{ duration: duration - 0.1, delay: duration + 0.5 }}
          className="absolute -left-12 bottom-6"
          src="/img/export-share-arrow.png"
        />
        <motion.img
          initial={{ y: '200%', x: '-50%' }}
          animate={{ y: '0' }}
          transition={{ duration: duration - 0.2, delay: duration + 0.7 }}
          className="absolute bottom-12 left-6 w-24 lg:w-auto"
          src="/img/export-share-pdf.png"
        />
        <motion.img
          initial={{ y: '200%', x: '-50%' }}
          animate={{ y: '0' }}
          transition={{ duration: duration - 0.2, delay: duration + 1 }}
          className="absolute bottom-20 left-1/2 w-20 lg:w-auto"
          src="/img/export-share-jpg.png"
        />
        <motion.img
          initial={{ y: '200%', x: '50%' }}
          animate={{ y: '0' }}
          transition={{ duration: duration - 0.2, delay: duration + 1.3 }}
          className="absolute bottom-12 right-6 w-24 lg:w-auto"
          src="/img/export-share-txt.png"
        />
      </div>
    ),
    [],
  );
}
