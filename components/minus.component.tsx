import { useRecoilState } from 'recoil';
import { changeCount } from '../recoil/count.recoil';

export default function () {

    const [minusCount, setMinusCount] = useRecoilState(changeCount('-'));

    return (
        <button onClick={() => setMinusCount(minusCount)}>-</button>
    )

}