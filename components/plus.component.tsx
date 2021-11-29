import { useRecoilState } from 'recoil';
import { changeCount } from '../recoil/count.recoil';

export default function () {

    const [plusCount, setPlusCount] = useRecoilState(changeCount('+'));
    const plusFunc = () => setPlusCount(plusCount);

    return (
        <button onClick={plusFunc}>+</button>
    )

}