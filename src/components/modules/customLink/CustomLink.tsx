import Link from 'next/link'
import { FC } from 'react'
import { TCustomLink } from './types';

const CustomLink: FC<TCustomLink> = ({ href, children, className }) => {
    return (
      <Link className={className} style={{ textDecoration: 'none' }} href={href}>
        {children}
      </Link>
    );
};
  
export default CustomLink;