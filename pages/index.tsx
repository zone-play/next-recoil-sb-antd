import type { NextPage } from 'next';
import { LayoutComponent } from '../components/layout.component';
import { HeaderComponent } from '../components/header.component';

interface props {
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
};

// const logoAlt = 'Tesla Logo';
// const logoWidth = 128;
// const logoHeight = 45;

const HomeComponent = ({logoAlt, logoWidth, logoHeight}: props) => {
  return (
    <LayoutComponent headTitle='Home 首页' header={<HeaderComponent logoAlt={logoAlt} logoWidth={logoWidth} logoHeight={logoHeight} />} main={<></>} footer={<>尾部</>} />
  )
}

export default HomeComponent
