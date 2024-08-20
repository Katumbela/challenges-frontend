"use client"

import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const ParallaxExample: React.FC = () => (
  <Parallax pages={3}>
    <ParallaxLayer
      offset={0}
      speed={0.5}
      style={{ backgroundImage: 'url(https://w0.peakpx.com/wallpaper/415/344/HD-wallpaper-curves-bg-wp-abstract.jpg)', backgroundSize: 'cover' }}
    />
    <ParallaxLayer
      offset={1}
      speed={1.0}
      style={{ backgroundImage: 'url(https://w0.peakpx.com/wallpaper/415/344/HD-wallpaper-curves-bg-wp-abstract.jpg)', backgroundSize: 'cover' }}
    />
    <ParallaxLayer offset={2} speed={0.5}>
      <h1>Última Camada</h1>
    </ParallaxLayer>
  </Parallax>
);

export default ParallaxExample;
