import type { NextPage } from 'next';
import Plus from '../components/plus.component';
import Minus from '../components/minus.component';
import CountReset from '../components/countReset.component';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { changeCount, count } from '../recoil/count.recoil';
import { LayoutComponent } from '../components/layout.component';

const Home: NextPage = () => {

  const value = useRecoilValue(count);
  const [plusCount, setPlusCount] = useRecoilState(changeCount('+'));
  const plusFunc = () => setPlusCount(plusCount);
  const [minusCount, setMinusCount] = useRecoilState(changeCount('-'));
  const minusFunc = () => setMinusCount(minusCount);
  const resetFunc = useResetRecoilState(changeCount(''));
  const content = <div><Minus minusFunc={minusFunc} /><h1>{value}</h1><Plus plusFunc={plusFunc} /><br /><CountReset resetFunc={resetFunc} /></div>

  return (
    <LayoutComponent headTitle='Home 首页' header={<>头部</>} main={content} footer={<>尾部</>} />
  )
}

export default Home
