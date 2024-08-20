import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const ScrollAnimation: React.FC = () => {
  const { scrollY } = useViewportScroll();
  const scale = useTransform(scrollY, [0, 300], [1, 2]);
  const rotate = useTransform(scrollY, [0, 300], [0, 360]);

  return (
    <motion.div
      style={{
        height: '150vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <motion.img
        src="sua-imagem.jpg"
        alt="Imagem"
        style={{
          scale,
          rotate,
          transition: 'all 0.2s ease-out',
          width: '300px',
        }}
      />
    </motion.div>
  );
};

export default ScrollAnimation;
