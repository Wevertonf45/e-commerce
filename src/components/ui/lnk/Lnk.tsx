import Link from 'next/link'
import { JSX } from 'react';

interface LnkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

function Lnk(props: LnkProps): JSX.Element {
    return (
        <div>
            <Link className={props.className} href={props.href}>
                {props.children}
            </Link>
        </div>
    )
}

export default Lnk
