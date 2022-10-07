import React from 'react';

import Layout from '@/components/Layout';
import FirstSection from '@/components/sections/FirstSection';
import Contribute from '@/components/sections/Contribute';
import AboutNFTG from '@/components/sections/AboutNFTG';
import PartnerSection from '@/components/sections/PartnerSection';
import CommunityPage from '@/components/sections/CommunityPage';
import FutureProjects from '@/components/sections/FutureProjects';
import Tokenomics from '@/components/sections/Tokenomics';
import StepSection from '@/components/sections/StepSection';
import FaqSection from '@/components/sections/FaqSection';
import BackToTopSection from '@/components/sections/BackToTopSection';

export default function index() {
  return (
    <Layout>
      <FirstSection />
      <Contribute />
      <AboutNFTG />
      <PartnerSection />
      <CommunityPage />
      <FutureProjects />
      <Tokenomics />
      <StepSection />
      <FaqSection />
      <BackToTopSection />
    </Layout>
  );
}
