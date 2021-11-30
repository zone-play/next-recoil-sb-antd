import { Media } from '../../media';
import { HeaderDeskComponent } from './header.desk';

export const HeaderComponent = () => {
    return (
        <>
            <Media greaterThanOrEqual="lg">
                <HeaderDeskComponent />
            </Media>
        </>
    )
}