import React from 'react';


import Layout from '@/components/Layout';
import FirstSection from '@/components/sections/FirstSection';
import Contribute from '@/components/sections/Contribute';
import AboutEVO from '@/components/sections/AboutEVO';
import PartnerSection from '@/components/sections/PartnerSection';
import CommunityPage from '@/components/sections/CommunityPage';
import FutureProjects from '@/components/sections/FutureProjects';
import Tokenomics from '@/components/sections/Tokenomics';
import StepSection from '@/components/sections/StepSection';
import FaqSection from '@/components/sections/FaqSection';
import BackToTopSection from '@/components/sections/BackToTopSection';
import WalletCard from '@/components/sections/WalletCard';
import OurTeam from '@/components/sections/OurTeam';
import Documents from '@/components/sections/Documents';
import Roadmap from '@/components/sections/Roadmap';

export default function index() {
  return (
    <Layout>
      <FirstSection />
      <WalletCard/>
      <AboutEVO />
      <Contribute />
      <Roadmap/>
      <CommunityPage />
      {/* <FutureProjects /> */}
      <Tokenomics />
      <Documents/>
      <FaqSection />
      <StepSection />
      <OurTeam/>
      <PartnerSection />
      <BackToTopSection />
    </Layout>
  );
}
