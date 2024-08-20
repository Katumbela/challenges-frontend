import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const ParallaxExample: React.FC = () => (
  <Parallax pages={3}>
    <ParallaxLayer
      offset={0}
      speed={0.5}
      style={{ backgroundImage: 'url(/background1.jpg)', backgroundSize: 'cover' }}
    />
    <ParallaxLayer
      offset={1}
      speed={1.0}
      style={{ backgroundImage: 'url(/background2.jpg)', backgroundSize: 'cover' }}
    />
    <ParallaxLayer offset={2} speed={0.5}>
      <h1>Última Camada</h1>
    </ParallaxLayer>
  </Parallax>
);

export default ParallaxExample;
