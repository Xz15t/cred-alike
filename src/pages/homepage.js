import React from 'react'
import BrandsLove from '../components/BrandsLove';
import Header from '../components/common/Header'
import Experience from '../components/Experience';
import FeelSpecial from '../components/FeelSpecial';
import HeroSection from '../components/HeroSection'
import MobileScroll from '../components/MobileScroll';
import ProductShowcase from '../components/ProductShowcase';
import Security from '../components/Security';
import WindowPeek from '../components/WindowPeek';
import Story from '../components/Story';
import AppRating from '../components/AppRating';
import Footer from '../components/common/Footer';

const HomePage = () => {
  return (<>
    <Header />
    <HeroSection />
    <ProductShowcase />
    <FeelSpecial />
    <BrandsLove />
    <Experience />
    <MobileScroll />
    <div className='non-mobile'>
      <WindowPeek />
    </div>
    <Security />
    <Story />
    <AppRating />
    <Footer />
  </>
  );
}

export default HomePage