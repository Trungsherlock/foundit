import { ReactNode } from 'react';

export type TCustomLink = {
    href: string;
    children: ReactNode;
    className: string;
    onClick?: () => void;
}
