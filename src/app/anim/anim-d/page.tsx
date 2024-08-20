import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="container">
      {/* Background Animation */}
      <motion.div
        className="background"
        initial={{ x: '-100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* 3D Animation */}
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <Box>
          <meshStandardMaterial attach="material" color="orange" />
        </Box>
      </Canvas>

      {/* Main Content */}
      <motion.div
        className="content"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h1>Every hero needs a sidekick. We have two.</h1>
        <p>Enjoy our award-winning macOS app, share all of your projects in the browser, and take Sketch with you.</p>
      </motion.div>

      {/* Dock Icons */}
      <div className="dock">
        {['icon1.png', 'icon2.png', 'icon3.png'].map((icon, index) => (
          <motion.img
            key={index}
            src={icon}
            alt={`Ícone ${index + 1}`}
            className="dock-icon"
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
