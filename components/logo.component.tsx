import Image from 'next/image';
import logo from '../public/logo.png';

interface props {
    logoAlt?: string;
    logoWidth?: number;
    logoHeight?: number;
}

export const LogoComponent = ({ logoAlt, logoWidth, logoHeight }: props) => {
    return (
        <Image src={logo} alt={logoAlt} width={logoWidth} height={logoHeight} />
    )
}