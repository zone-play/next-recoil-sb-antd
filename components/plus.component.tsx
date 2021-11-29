import { useRecoilState } from 'recoil';
import { changeCount } from '../recoil/count.recoil';

export default function () {

    const [plusCount, setPlusCount] = useRecoilState(changeCount('+'))

    return (
        <button onClick={() => setPlusCount(plusCount)}>+</button>
    )

}