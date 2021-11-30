import { useResetRecoilState } from 'recoil';
import { changeCount } from '../recoil/count.recoil';

export default function () {

    const reset = useResetRecoilState(changeCount(''))

    return (
        <button onClick={reset}>reset</button>
    )
}