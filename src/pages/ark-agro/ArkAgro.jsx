import React from 'react';
import ArkAgroBanner from './components/ArkAgroBanner';
import ArkAgroIntro from './components/ArkAgroIntro';
import ArkAgroProduce from './components/ArkAgroProduce';
import ArkGaushala from './components/ArkGaushala';
import ArkD3Ghee from './components/ArkD3Ghee';

const ArkAgro = () => {
  return (
    <div className="min-h-screen">
      <ArkAgroBanner />
      <ArkAgroIntro />
      <ArkAgroProduce />
      <ArkGaushala />
      <ArkD3Ghee />
    </div>
  );
};
  
  export default ArkAgro;