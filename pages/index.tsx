import type { NextPage } from 'next';
import { LayoutComponent } from '../components/layout.component';
import { HeaderComponent } from '../components/header.component';

const Home: NextPage = () => {
  return (
    <LayoutComponent headTitle='Home 首页' header={<HeaderComponent />} main={<></>} footer={<>尾部</>} />
  )
}

export default Home
