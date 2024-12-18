import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppAppBar from '../components/AppAppBar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import AppTheme from '../shared-theme/AppTheme';
import MoreAboutUs from '../components/moreAboutUs';
import DevelopmentProcess from '../components/DevelopmentProcess';
import ProjectCases from '../components/projectCases';
import OurPictures from '../components/ourPicture';
import { ContactUs } from '../components/contactUs';

export default function MarketingPage(props) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <Hero />
      <div style={{ maxWidth: '100vw' }}>
        <MoreAboutUs />
        <DevelopmentProcess />
        <ProjectCases />
        <OurPictures />
        <ContactUs />
        <Divider />
        <Footer />
      </div>
    </AppTheme>
  );
}
