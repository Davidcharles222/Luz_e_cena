import { ReactNode } from 'react'
import styles from './Link.module.css'

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode
}

const Link = ({ children, ...rest }: LinkProps) => {
    return (
        <a className={styles.link} {...rest} >{children}</a>
    )
}

export default Link