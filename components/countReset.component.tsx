import { useResetRecoilState } from 'recoil';
import { count } from '../recoil/count.recoil';

export default function () {

    const reset = useResetRecoilState(count)

    return (
        <button onClick={reset}>reset</button>
    )
}