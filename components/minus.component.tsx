import { useRecoilState } from 'recoil';
import { changeCount } from '../recoil/count.recoil';

export default function () {

    const [minusCount, setMinusCount] = useRecoilState(changeCount('-'));
    const minusFunc = () => setMinusCount(minusCount);

    return (
        <button onClick={minusFunc}>-</button>
    )

}