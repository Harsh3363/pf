import React from 'react';


import Layout from '@/components/Layout';
import FirstSection from '@/components/sections/FirstSection';
import AboutPepe from '@/components/sections/AboutPepe';
import PartnerSection from '@/components/sections/PartnerSection';
import Tokenomics from '@/components/sections/Tokenomics';
import Roadmap from '@/components/sections/Roadmap';
import How_buy from '@/components/sections/How_buy';

export default function index() {
  return (
    <Layout>
      <FirstSection />
      <AboutPepe />
      <How_buy />
      <Roadmap/>
      <Tokenomics />
      <PartnerSection />
    </Layout>
  );
}
