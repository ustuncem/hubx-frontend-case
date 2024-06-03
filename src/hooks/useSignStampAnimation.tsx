import { useCallback } from 'react';

import { motion } from 'framer-motion';

export default function useSignStampAnimation() {
  return useCallback(
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
}
